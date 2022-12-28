package com.springboot.freelance.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.springboot.freelance.entity.Annotaions.UniqueUsernameOrEmail;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
public class SignUpDTO {

    @NotNull(message = "enter your first name")
    private String firstName;

    @NotNull(message = "enter your last name")
    private String lastName;


    @NotNull(message = "username cannot be empty")
    @Size(min = 4, max = 255)
    @UniqueUsernameOrEmail(message = "username already exists")
    private String userName;

    @NotNull(message = "email cannot be empty")
    @UniqueUsernameOrEmail(message = "email already exists")
    private String email;

    @NotNull(message = "password is invalid")
    @Size(min = 8, max = 255, message = "password is invalid")
    @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", message = "password is invalid")
    private String password;

    @NotNull(message = "specify role")
    private String role;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy")
    private Date joinDate;
}
