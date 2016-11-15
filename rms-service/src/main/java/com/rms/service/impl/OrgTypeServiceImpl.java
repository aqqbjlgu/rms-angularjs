package com.rms.service.impl;

import com.rms.common.entity.OrgEntity;
import com.rms.common.entity.OrgTypeEntity;
import com.rms.common.entity.OrgTypeRuleEntity;
import com.rms.facade.OrgTypeService;
import com.rms.facade.OrganizationService;
import com.rms.repository.OrgTypeRepository;
import com.rms.repository.OrgTypeRuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.persistence.Transient;
import java.util.Date;
import java.util.List;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.ignoreCase;


/**
 * Created by 国平 on 2016/10/21.
 */
@Service
public class OrgTypeServiceImpl extends BasicServiceImpl<OrgTypeEntity> implements OrgTypeService {

    @Autowired
    private OrgTypeRuleRepository orgTypeRuleRepository;

    @Autowired
    private OrganizationService organizationService;

    @Autowired
    private OrgTypeRepository orgTypeRepository;



    public void addOrgTypRule(String pid, String cid, Integer num) {

        OrgTypeRuleEntity orgTypeRuleEntity = new OrgTypeRuleEntity();
        orgTypeRuleEntity.setPid(pid);
        orgTypeRuleEntity.setCid(cid);
        orgTypeRuleEntity.setNum(num);
        orgTypeRuleEntity.setBelongTo("RIGHTS");
        orgTypeRuleEntity.setInsertDate(new Date());
        orgTypeRuleEntity.setUpDateDate(new Date());
        orgTypeRuleRepository.save(orgTypeRuleEntity);

    }

    public void deleteOrgTypRule(String pid, String cid) {
        OrgTypeRuleEntity orgTypeRuleEntity = new OrgTypeRuleEntity();
        orgTypeRuleEntity.setCid(cid);
        orgTypeRuleEntity.setPid(pid);
        ExampleMatcher matcher = ExampleMatcher.matching().withMatcher("pid", ignoreCase()).withMatcher("cid",ignoreCase());
        Example<OrgTypeRuleEntity> example = Example.of(orgTypeRuleEntity,matcher);
        orgTypeRuleEntity = orgTypeRuleRepository.findOne(example);
        orgTypeRuleRepository.delete(orgTypeRuleEntity);
    }

    public void updateOrgTypRule(String pid, String cid, Integer num) {
        OrgTypeRuleEntity orgTypeRuleEntity = new OrgTypeRuleEntity();
        orgTypeRuleEntity.setCid(cid);
        orgTypeRuleEntity.setPid(pid);
        ExampleMatcher matcher = ExampleMatcher.matching().withMatcher("pid", ignoreCase()).withMatcher("cid",ignoreCase());
        Example<OrgTypeRuleEntity> example = Example.of(orgTypeRuleEntity,matcher);
        orgTypeRuleEntity = orgTypeRuleRepository.findOne(example);
        orgTypeRuleRepository.save(orgTypeRuleEntity);
    }
    
    @Transactional
    public void delete(List<String> ids) {
        List<OrgEntity> organizations = organizationService.getAllByTypeId(ids);
        if(CollectionUtils.isEmpty(organizations)){
            orgTypeRepository.delete(ids);
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
