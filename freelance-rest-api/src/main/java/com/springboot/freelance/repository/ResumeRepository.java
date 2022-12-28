package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
    Resume findResumeById(Long id);
}
