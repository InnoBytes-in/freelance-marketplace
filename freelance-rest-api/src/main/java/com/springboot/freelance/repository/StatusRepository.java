package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusRepository extends JpaRepository<Status, Long> {
    Status findStatusByStatus(String status);
}
