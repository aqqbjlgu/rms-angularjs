package com.rms.facade;

import com.rms.common.dto.PersonDto;
import com.rms.common.entity.PersonEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

/**
 * Created by 国平 on 2016/10/21.
 */
public interface PersonService extends BasicService<PersonEntity> {
    
    void delete(List<String> ids) throws Exception;
    
    List<PersonEntity> getAllByPositoinId(List<String> positionIds);
    
    Page<PersonDto> getAll(PageRequest pageRequest);
    
    PersonEntity save(PersonEntity personEntity);
    
    
}
