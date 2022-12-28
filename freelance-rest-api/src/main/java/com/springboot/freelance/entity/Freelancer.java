package com.springboot.freelance.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(
        name = "freelancers"
)
public class Freelancer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "image")
    private String image;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "hrrate")
    private int hrRate;

    @Column(name = "number")
    private String number;

    @Column(name = "city")
    private String city;

    @Column(name = "country")
    private String country;

    @OneToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "freelancer")
    private Set<BidDetails> bids;
}
