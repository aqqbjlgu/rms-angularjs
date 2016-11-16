package com.rms.controller;

import com.rms.common.entity.OrgEntity;
import com.rms.common.entity.OrgTypeEntity;
import com.rms.common.util.ErrorType;
import com.rms.common.util.ExceptionUtil;
import com.rms.common.util.Result;
import com.rms.facade.OrganizationService;
import com.rms.vo.OrgVo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

/**
 * Created by 国平 on 2016/10/23.
 */
@Controller
@RequestMapping("/org")
public class OrgController {
    @Autowired
    private OrganizationService organizationService;
    @RequestMapping(value = "/getAll",method = RequestMethod.GET)
    public @ResponseBody Result getAll(Integer curPage, Integer pageSize){
        Page<OrgEntity> page = null;
        try {
            PageRequest pageRequest = new PageRequest(curPage-1, pageSize);
            page = organizationService.getAll(pageRequest);
        }catch (Exception e){
            e.printStackTrace();
            return Result.build(500, ExceptionUtil.getStackTrace(e), false, ErrorType.RuntimeException.toString());
        }
        return Result.ok(page);
    }

    public @ResponseBody Result add(OrgVo orgVo, BindingResult result, HttpSession session){
        OrgEntity orgEntity = new OrgEntity();
        try {
            if (result.getErrorCount()>0){
                String errorMessage = "";
                for (FieldError error : result.getFieldErrors()){
                    errorMessage += error.getField()+ ":" + error.getDefaultMessage()+"</br>";
                }
                return Result.build(500, errorMessage, false, ErrorType.NormException.toString());
            }
            if(StringUtils.isEmpty(orgVo.getId())){
                orgVo.setInsertDate(new Date());
                orgVo.setInsertUserId(session.getAttribute("userId")==null?"guest":session.getAttribute("userId").toString());
            }
            orgVo.setUpDateDate(new Date());
            orgVo.setUpDateUserId(session.getAttribute("userId")==null?"guest":session.getAttribute("userId").toString());
            BeanUtils.copyProperties(orgVo,orgEntity);
            orgEntity = organizationService.save(orgEntity);
        }catch (Exception e){
            return Result.build(500, ExceptionUtil.getStackTrace(e), false, ErrorType.RuntimeException.toString());
        }
        return Result.ok(orgEntity);
    }
}
