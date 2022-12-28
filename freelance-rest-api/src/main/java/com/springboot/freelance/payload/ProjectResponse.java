package com.springboot.freelance.payload;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ProjectResponse {
    private Long id;
    private String name;
    private String details;
    private Date postDate;
    private String category;
    private int hrRateTo;
    private int hrRateFrom;
    private int duration;
    private List<String> skills;
    private Long clientID;
}
