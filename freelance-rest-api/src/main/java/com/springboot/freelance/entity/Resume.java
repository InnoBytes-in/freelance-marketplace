package com.springboot.freelance.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table(name = "resumes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "filename")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "filepath")
    private String filePath;

    @OneToOne(mappedBy = "resume")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Freelancer freelancer;

}
