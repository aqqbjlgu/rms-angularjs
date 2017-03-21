package com.rms.service.impl;

import com.rms.common.entity.OrgEntity;
import com.rms.common.entity.OrgTypeEntity;
import com.rms.common.entity.OrgTypeRuleEntity;
import com.rms.common.exception.BusinessException;
import com.rms.facade.OrgTypeService;
import com.rms.facade.OrganizationService;
import com.rms.repository.OrgTypeRepository;
import com.rms.repository.OrgTypeRuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Date;
import java.util.List;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.ignoreCase;


/**
 * Created by 国平 on 2016/10/21.
 */
@Service
public class OrgTypeServiceImpl extends BasicServiceImpl<OrgTypeEntity> implements OrgTypeService {

    @Autowired
    private OrgTypeRuleService orgTypeRuleRepository;

    @Autowired
    private OrganizationService organizationService;

    @Autowired
    private OrgTypeRepository orgTypeRepository;

    public Page<OrgTypeEntity> getOrgTypeByPid(String pid, PageRequest pageRequest) {
        Specification<OrgTypeEntity> specification = new Specification<OrgTypeEntity>() {
            public Predicate toPredicate(Root<OrgTypeEntity> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                criteriaBuilder.in()
                return null;
            }
        };
        
        return orgTypeRepository.getOrgTypeByPid(specification, pageRequest);
    }
    
    @Transactional
    public void delete(List<String> ids) throws Exception {
        List<OrgEntity> organizations = organizationService.getAllByTypeId(ids);
        if(CollectionUtils.isEmpty(organizations)){
            orgTypeRepository.delete(ids);
        }else{
            throw new BusinessException(500,"请先删除该分类下的组织机构");
        }
    }
    
    public List<OrgTypeEntity> getAllByRule(String pid) {
        return null;
    }

    public void delete(OrgTypeEntity orgTypeEntity){
        OrgEntity orgEntity = new OrgEntity();
        orgEntity.setTypeId(orgTypeEntity.getId());
        ExampleMatcher matcher = ExampleMatcher.matching().withMatcher("typeId", ignoreCase()).withIgnorePaths("leaf");
        Example<OrgEntity> example = Example.of(orgEntity,matcher);
        List<OrgEntity> orgEntities = organizationService.getAllByExample(example);
        if(!CollectionUtils.isEmpty(orgEntities)){
            orgTypeRepository.delete(orgTypeEntity);
        }

    }
}
