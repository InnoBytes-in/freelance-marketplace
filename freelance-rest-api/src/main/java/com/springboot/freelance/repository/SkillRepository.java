package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    Skill findSkillBySkill(String skill);
}
