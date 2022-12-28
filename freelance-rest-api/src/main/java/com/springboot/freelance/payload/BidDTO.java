package com.springboot.freelance.payload;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class BidDTO {
    private Long projectID;
    private int bidAmount;
    private int duration;
    private String proposal;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-mm-yyyy")
    private Date bidDate;
}
