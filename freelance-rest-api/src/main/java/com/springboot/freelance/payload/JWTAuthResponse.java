package com.springboot.freelance.payload;

import com.springboot.freelance.entity.Role;
import lombok.Data;

import java.util.Date;

@Data
public class JWTAuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private Date joinDate;
    private Role role;
    private Long id;

    public JWTAuthResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
