package com.springboot.freelance.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Data
public class ProjectDTO {
    private String name;
    private String details;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy")
    private Date postDate;

    private String category;
    private int hrRateTo;
    private int hrRateFrom;
    private int duration;
    private Set<String> skills;
}
