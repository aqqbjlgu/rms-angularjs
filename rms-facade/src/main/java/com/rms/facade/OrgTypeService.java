package com.rms.facade;

import com.rms.common.entity.OrgTypeEntity;

import java.util.List;

/**
 * Created by 国平 on 2016/10/21.
 */
public interface OrgTypeService extends BasicService<OrgTypeEntity> {

    public void addOrgTypRule(String pid, String cid, Integer num);

    public void deleteOrgTypRule(String pid, String cid);

    public void updateOrgTypRule(String pid, String cid, Integer num);

    public void delete(List<String> ids);

}
