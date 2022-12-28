package com.springboot.freelance.service.impl;

import com.springboot.freelance.entity.*;
import com.springboot.freelance.payload.BidDTO;
import com.springboot.freelance.payload.ProjectDTO;
import com.springboot.freelance.payload.ProjectResponse;
import com.springboot.freelance.repository.*;
import com.springboot.freelance.service.ProjectService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    private SkillRepository skillRepository;

    private StatusRepository statusRepository;

    private ClientRepository clientRepository;

    private FreelancerRepository freelancerRepository;

    private ModelMapper modelMapper;

    private BidRepository bidRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository, SkillRepository skillRepository, StatusRepository statusRepository, ClientRepository clientRepository, FreelancerRepository freelancerRepository, ModelMapper modelMapper, BidRepository bidRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
        this.statusRepository = statusRepository;
        this.clientRepository = clientRepository;
        this.freelancerRepository = freelancerRepository;
        this.modelMapper = modelMapper;
        this.bidRepository = bidRepository;
    }

    @Override
    public void saveProject(ProjectDTO projectDTO, Long id) {
        Project project = new Project();
        project.setName(projectDTO.getName());
        project.setDetails(projectDTO.getDetails());
        project.setCategory(projectDTO.getCategory());
        project.setPostDate(projectDTO.getPostDate());
        project.setDuration(projectDTO.getDuration());
        project.setHrRateFrom(projectDTO.getHrRateFrom());
        project.setHrRateTo(projectDTO.getHrRateTo());

        Set<String> skills = projectDTO.getSkills();
        List<Skill> skillSet = new ArrayList<>();

        for (String skill : skills) {
            skillSet.add(skillRepository.findSkillBySkill(skill));
        }

        project.setSkills(skillSet);

        Status status = statusRepository.findStatusByStatus("ACTIVE");
        project.setStatus(status);

        Client client = clientRepository.findClientById(id);
        project.setClient(client);

        projectRepository.save(project);
    }

    @Override
    public ProjectResponse updateProject(ProjectDTO projectDTO) {
        return null;
    }

    @Override
    public List<ProjectResponse> getProjects() {
        List<Project> projects = projectRepository.findAll();

        List<ProjectResponse> projectResponses = new ArrayList<>();

        for (Project project : projects) {
            ProjectResponse projectResponse = new ProjectResponse();
            projectResponse.setId(project.getId());
            projectResponse.setName(project.getName());
            projectResponse.setDetails(project.getDetails());
            projectResponse.setHrRateFrom(project.getHrRateFrom());
            projectResponse.setHrRateTo(project.getHrRateTo());
            projectResponse.setCategory(project.getCategory());
            projectResponse.setDuration(project.getDuration());
            List<String> skills = new ArrayList<>();
            for (Skill skill : project.getSkills()) {
                skills.add(skill.getSkill());
            }
            projectResponse.setSkills(skills);
            projectResponse.setClientID(project.getClient().getId());
            projectResponses.add(projectResponse);
        }

        return projectResponses;
    }

    @Override
    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    @Override
    public void placeBid(Long id, BidDTO bidDTO) {
        Freelancer freelancer = freelancerRepository.findFreelancerById(id);

        System.out.println(bidDTO);

        Project project = projectRepository.findProjectById(bidDTO.getProjectID());

        BidDetails bidDetails = new BidDetails();
        bidDetails.setBidAmount(bidDTO.getBidAmount());
        bidDetails.setBidDate(bidDTO.getBidDate());
        bidDetails.setDays(bidDTO.getDuration());
        bidDetails.setProposal(bidDTO.getProposal());
        bidDetails.setFreelancer(freelancer);
        bidDetails.setProject(project);

        bidRepository.save(bidDetails);
    }
}
