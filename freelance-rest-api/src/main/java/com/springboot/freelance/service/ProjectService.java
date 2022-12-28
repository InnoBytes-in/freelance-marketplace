package com.springboot.freelance.service;

import com.springboot.freelance.entity.Skill;
import com.springboot.freelance.payload.BidDTO;
import com.springboot.freelance.payload.ProjectDTO;
import com.springboot.freelance.payload.ProjectResponse;

import java.util.List;

public interface ProjectService {
    void saveProject(ProjectDTO projectDTO, Long id);
    ProjectResponse updateProject(ProjectDTO projectDTO);
    List<ProjectResponse> getProjects();
    List<Skill> getSkills();
    void placeBid(Long id, BidDTO bidDTO);
}
