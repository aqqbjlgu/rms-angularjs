package com.rms.repository;

import com.rms.common.entity.PersonEntity;
import com.rms.common.entity.PositionEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersonRepository extends JpaRepository<PersonEntity, String> {

}

