package com.springboot.freelance.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bidDetails")
public class BidDetails {


    @EmbeddedId
    private FreelancerProjectId id = new FreelancerProjectId();


    @ManyToOne
    @MapsId("freelancerId")
    private Freelancer freelancer;

    @ManyToOne
    @MapsId("projectId")
    private Project project;

    @Column(name = "biddate")
    private Date bidDate;

    @Column(name = "bidamount")
    private int bidAmount;

    @Column(name = "duration")
    private int days;

    @Column(name = "proposal")
    private String proposal;
}
