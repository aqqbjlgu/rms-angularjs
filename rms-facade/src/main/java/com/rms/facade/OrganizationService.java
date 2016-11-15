package com.rms.facade;

import com.rms.common.entity.OrgEntity;

import java.util.List;
import java.util.StringTokenizer;

/**
 * Created by 国平 on 2016/10/21.
 */
public interface OrganizationService extends BasicService<OrgEntity> {
    
    List<OrgEntity> getAllByTypeId(List<String> typeIds);
}
