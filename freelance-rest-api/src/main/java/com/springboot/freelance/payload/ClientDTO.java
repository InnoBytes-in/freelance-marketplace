package com.springboot.freelance.payload;

import lombok.Data;

@Data
public class ClientDTO {
    private String title;
    private String description;
    private String organization;
    private String number;
    private String city;
    private String country;
}
