package com.rms.repository;

import com.rms.common.entity.OrgEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface OrganizationRepository extends JpaRepository<OrgEntity, String> {
    
    @Query("from OrgEntity where typeId in (:typeIds)")
    List<OrgEntity> getAllByTypeIds(@Param("typeIds") List<String> typeIds);

}

