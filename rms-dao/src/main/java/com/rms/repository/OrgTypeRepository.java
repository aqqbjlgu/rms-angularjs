package com.rms.repository;

import com.rms.common.entity.OrgTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface OrgTypeRepository extends JpaRepository<OrgTypeEntity, String> {
    
    @Modifying
    @Query("delete from OrgTypeEntity where id in(:ids)")
    void delete(@Param("ids") List<String> ids);
        

}

