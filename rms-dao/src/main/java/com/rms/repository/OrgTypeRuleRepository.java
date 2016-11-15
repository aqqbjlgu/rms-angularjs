package com.rms.repository;

import com.rms.common.entity.OrgTypeEntity;
import com.rms.common.entity.OrgTypeRuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrgTypeRuleRepository extends JpaRepository<OrgTypeRuleEntity, String> {

}

