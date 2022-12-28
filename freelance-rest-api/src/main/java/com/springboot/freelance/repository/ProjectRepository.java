package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Project findProjectById(Long id);
}
