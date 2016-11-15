package com.rms.service.impl;

import com.rms.facade.OrganizationService;
import com.rms.common.entity.OrgEntity;
import com.rms.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.StringTokenizer;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.ignoreCase;


/**
 * Created by 国平 on 2016/10/21.
 */
@Service
public class OrganizationServiceImpl extends BasicServiceImpl<OrgEntity> implements OrganizationService {
    @Autowired
    private OrganizationRepository organizationRepository;
    public void deleteOrgTypRule() {
        OrgEntity orgEntity = new OrgEntity();
        orgEntity.setAddress("1");
        orgEntity.setAtt1("1");
        ExampleMatcher matcher = ExampleMatcher.matching().withMatcher("att1", ignoreCase()).withMatcher("address",ignoreCase()).withIgnorePaths("leaf");
        Example<OrgEntity> example = Example.of(orgEntity,matcher);
        List<OrgEntity> orgEntitys = this.getAllByExample(example);
        System.out.print("&&&&&&&&&&&&&&&&&"+orgEntitys.get(0).getManagerType());
        //orgTypeRuleRepository.delete(orgTypeRuleEntity);
    }
    
    
    public List<OrgEntity> getAllByTypeId(List<String> typeIds) {
        return organizationRepository.getAllByTypeIds(typeIds);
    }
}
