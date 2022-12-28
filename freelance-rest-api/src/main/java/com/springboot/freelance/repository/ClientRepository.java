package com.springboot.freelance.repository;

import com.springboot.freelance.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findClientById(Long id);
}
