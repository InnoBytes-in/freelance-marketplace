package com.springboot.freelance.entity;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class FreelancerProjectId implements Serializable {
    private static final long serialVersionUID = 1L;
    private Long freelancerId;
    private Long projectId;
}
