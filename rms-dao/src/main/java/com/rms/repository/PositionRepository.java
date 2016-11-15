package com.rms.repository;

import com.rms.common.entity.OrgTypeEntity;
import com.rms.common.entity.PositionEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PositionRepository extends JpaRepository<PositionEntity, String> {

}

