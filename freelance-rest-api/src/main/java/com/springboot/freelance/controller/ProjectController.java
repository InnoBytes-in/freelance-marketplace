package com.springboot.freelance.controller;

import com.springboot.freelance.entity.Skill;
import com.springboot.freelance.payload.BidDTO;
import com.springboot.freelance.payload.ProjectDTO;
import com.springboot.freelance.payload.ProjectResponse;
import com.springboot.freelance.service.impl.ProjectServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/1.0")
public class ProjectController {

    @Autowired
    private ProjectServiceImpl projectService;

    @PreAuthorize(value = "hasAuthority('CLIENT')" + "and authentication.name.equals(@clientRepository.findClientById(#id).user.email)")
    @PostMapping("/saveProject/{id}")
    public ResponseEntity<?> createProject(@PathVariable Long id, @RequestBody ProjectDTO projectDTO) {
        projectService.saveProject(projectDTO, id);
        return new ResponseEntity<>("Project added!", HttpStatus.OK);
    }

    @GetMapping("/getProjects")
    public ResponseEntity<?> getProjects() {
        List<ProjectResponse> projects = projectService.getProjects();

        if (projects.isEmpty()) {
            return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @GetMapping("/getSkills")
    public ResponseEntity<?> getSkills() {
        List<Skill> skills = projectService.getSkills();

        if (skills.isEmpty()) {
            return new ResponseEntity<>("No skills found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(skills, HttpStatus.OK);
    }

    @PreAuthorize(value = "hasAuthority('FREELANCER')" + "and authentication.name.equals(@freelancerRepository.findFreelancerById(#id).user.email)")
    @PostMapping("/placeBid/{id}")
    public ResponseEntity<?> placeBid(@PathVariable Long id, @RequestBody BidDTO bidDTO) {
        projectService.placeBid(id, bidDTO);
        return new ResponseEntity<>("Bid placed successfully", HttpStatus.OK);
    }
}
