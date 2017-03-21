package com.rms.service.impl;

import com.rms.common.dto.PersonDto;
import com.rms.common.entity.PersonEntity;
import com.rms.common.entity.PersonOrgPosEntity;
import com.rms.common.entity.PositionEntity;
import com.rms.facade.PersonService;
import com.rms.facade.PositionService;
import com.rms.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * Created by 国平 on 2016/10/21.
 */
@Service
public class PersonServiceImpl extends BasicServiceImpl<PersonEntity> implements PersonService {
    @Autowired
    private PersonRepository personRepository;
    
    private PersonOrgPosEntity
    
    public void delete(List<String> ids) throws Exception {
        
    }
    
    public List<PersonEntity> getAllByPositoinId(List<String> positionIds) {
        return personRepository.getAllByPositoinId(positionIds);
    }
    
    public Page<PersonDto> getAll(PageRequest pageRequest) {
        return personRepository.getAll(pageRequest);
    }
    
    public PersonEntity save(PersonEntity personEntity){
        
    }
}
