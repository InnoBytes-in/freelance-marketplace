package com.springboot.freelance.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class FreelancerDTO {
    @NotBlank(message = "title cannot be empty")
    private String title;

    @NotBlank(message = "description cannot be empty")
    private String description;

    private int hrRate;

    @Size(min = 10, max = 10, message = "enter your number")
    @Pattern(regexp="(^$|[0-9]{10})", message = "please enter a valid number")
    private String number;

    @NotBlank(message = "please specify your city")
    private String city;

    @NotBlank(message = "please specify your country")
    private String country;
}
