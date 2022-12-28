package com.springboot.freelance.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "projects")
public class Project{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "details", length = 4000)
    private String details;

    @Column(name = "postDate")
    private Date postDate;

    @Column(name = "category")
    private String category;

    @Column(name = "hrTo")
    private int hrRateTo;

    @Column(name = "hrFrom")
    private int hrRateFrom;

    @Column(name = "duration")
    private int duration;

    @ManyToMany
    @JoinTable(
            name = "skill_project",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    private List<Skill> skills;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToMany(mappedBy = "project")
    private Set<BidDetails> bidders;
}
