package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {
    @Modifying
    @Query("update Freelancer f set f.image = :filePath where f.id = :id")
    void updateImage(@Param(value = "id") Long id, @Param(value = "filePath") String filePath);
    Freelancer findFreelancerById(Long id);
}
