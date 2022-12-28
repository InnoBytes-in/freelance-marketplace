package com.springboot.freelance.repository;

import com.springboot.freelance.entity.BidDetails;
import com.springboot.freelance.entity.FreelancerProjectId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepository extends JpaRepository<BidDetails, FreelancerProjectId> {
}
