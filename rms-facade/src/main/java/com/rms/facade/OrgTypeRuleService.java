package com.rms.facade;

import com.rms.common.entity.OrgTypeEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

/**
 * Created by 国平 on 2016/10/21.
 */
public interface OrgTypeService extends BasicService<OrgTypeEntity> {

   void addOrgTypRule(String pid, String cid, Integer num);

   void deleteOrgTypRule(String pid, String cid);
    
   void updateOrgTypRule(String pid, String cid, Integer num);
    
   Page<OrgTypeEntity> getOrgTypeByPid(String pid, PageRequest pageRequest);

   void delete(List<String> ids) throws Exception;

}
