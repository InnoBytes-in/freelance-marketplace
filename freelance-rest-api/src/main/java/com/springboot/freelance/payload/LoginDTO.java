package com.springboot.freelance.payload;

import lombok.Data;

@Data
public class LoginDTO {
    private String userNameOrEmail;
    private String password;

}
