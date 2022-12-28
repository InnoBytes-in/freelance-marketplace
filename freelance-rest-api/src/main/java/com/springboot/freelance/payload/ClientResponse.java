package com.springboot.freelance.payload;

import lombok.Data;

import java.util.Date;

@Data
public class ClientResponse {
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private Long id;
    private Date joinDate;
    private ClientDTO clientDTO;
}
