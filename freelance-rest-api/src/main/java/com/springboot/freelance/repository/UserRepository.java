package com.springboot.freelance.repository;

import com.springboot.freelance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUserName(String userName);
    Optional<User> findByEmail(String email);
    Optional<User> findByEmailOrUserName(String userName, String email);
    Boolean existsByUserName(String userName);
    Boolean existsByEmail(String email);
}
