package com.springboot.freelance.service.impl;

import com.springboot.freelance.entity.Freelancer;
import com.springboot.freelance.entity.Resume;
import com.springboot.freelance.entity.User;
import com.springboot.freelance.payload.FreelanceResponse;
import com.springboot.freelance.payload.FreelancerDTO;
import com.springboot.freelance.repository.FreelancerRepository;
import com.springboot.freelance.repository.ResumeRepository;
import com.springboot.freelance.service.FreelancerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Service
public class FreelancerServiceImpl implements FreelancerService {
    
    private FreelancerRepository freelancerRepository;

    private ResumeRepository resumeRepository;

    private ModelMapper modelMapper;


    @Value("${project.images}")
    private String imagePath;

    @Value("${project.resumes}")
    private String resumePath;

    public FreelancerServiceImpl(FreelancerRepository freelancerRepository, ModelMapper modelMapper, ResumeRepository resumeRepository) {
        this.freelancerRepository = freelancerRepository;
        this.modelMapper = modelMapper;
        this.resumeRepository = resumeRepository;
    }

    @Override
    public FreelanceResponse updateFreelancer(FreelancerDTO freelancerDTO, Long id) {
        Freelancer freelancer = freelancerRepository.findFreelancerById(id);
        freelancer.setTitle(freelancerDTO.getTitle());
        freelancer.setDescription(freelancerDTO.getDescription());
        freelancer.setCountry(freelancerDTO.getCountry());
        freelancer.setCity(freelancerDTO.getCity());
        freelancer.setHrRate(freelancerDTO.getHrRate());
        freelancer.setNumber(freelancerDTO.getNumber());

        Freelancer freelancer1 = freelancerRepository.save(freelancer);
        User user = freelancer1.getUser();

        FreelanceResponse freelanceResponse = new FreelanceResponse();
        freelanceResponse.setFreelancerDTO(modelMapper.map(freelancer1, FreelancerDTO.class));
        freelanceResponse.setUserName(user.getUserName());
        freelanceResponse.setEmail(user.getEmail());
        freelanceResponse.setFirstName(user.getFirstName());
        freelanceResponse.setLastName(user.getLastName());
        freelanceResponse.setId(freelancer1.getId());
        freelanceResponse.setJoinDate(user.getJoinDate());

        return freelanceResponse;
    }

    @Override
    public String uploadImageToFileSystem(MultipartFile file, Long id) throws FileNotFoundException {
        try {
            Freelancer freelancer = freelancerRepository.findFreelancerById(id);

            if (freelancer.getImage() != null) {
                String path = freelancer.getImage();
                Files.delete(Paths.get(path));
                freelancer.setImage(null);
            }

            String filePath = imagePath + File.separator + id;
            File file1 = new File(filePath);
            if (!file1.exists()) file1.mkdir();
            filePath = filePath + "/" + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            freelancer.setImage(filePath);
            freelancerRepository.save(freelancer);

            return file.getOriginalFilename();
        } catch (Exception e) {
            throw new FileNotFoundException("Image not found for uploading");
        }

    }

    @Override
    public byte[] retrieveImageFromFileSystem(Long id) throws FileNotFoundException {
            try {
                Freelancer freelancer = freelancerRepository.findFreelancerById(id);
                String filePath = freelancer.getImage();
                return Files.readAllBytes(new File(filePath).toPath());
            } catch (Exception e) {
                throw new FileNotFoundException("Image not found for downloading");
            }

    }

    @Override
    public String uploadResumeToFileSystem(MultipartFile file, Long id) throws FileNotFoundException {
        try {
            Freelancer freelancer = freelancerRepository.findFreelancerById(id);

            if (freelancer.getResume() != null) {
                Resume resume = freelancer.getResume();
                String path = resume.getFilePath();
                Files.delete(Paths.get(path));
                freelancer.setResume(null);
                resumeRepository.delete(resume);
            }

            String filePath = resumePath + File.separator + id;
            File file1 = new File(filePath);
            if (!file1.exists()) file1.mkdir();
            filePath = filePath + "/" + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            Resume resume = new Resume();
            resume.setFilePath(filePath);
            resume.setType(file.getContentType());
            resume.setName(file.getOriginalFilename());

            resume.setFreelancer(freelancer);
            freelancer.setResume(resume);
            resumeRepository.save(resume);

            return file.getOriginalFilename();
        } catch (Exception e) {
            throw new FileNotFoundException("File not found for uploading");
        }

    }

    @Override
    public ByteArrayResource retrieveResumeFromFileSystem(Long id) throws FileNotFoundException {
        try {
            Resume resume = resumeRepository.findResumeById(id);
            String filePath = resume.getFilePath();
            return new ByteArrayResource(Files.readAllBytes(new File(filePath).toPath()));
        } catch (Exception e) {
            throw new FileNotFoundException("File not found for downloading");
        }

    }

    @Override
    public List<FreelanceResponse> getFreelancers() {
        List<Freelancer> freelancers = freelancerRepository.findAll();

        List<FreelanceResponse> freelanceResponses = new ArrayList<>();

        for (Freelancer freelancer : freelancers) {
            User user = freelancer.getUser();

            FreelanceResponse freelanceResponse = new FreelanceResponse();
            freelanceResponse.setFreelancerDTO(modelMapper.map(freelancer, FreelancerDTO.class));
            freelanceResponse.setUserName(user.getUserName());
            freelanceResponse.setEmail(user.getEmail());
            freelanceResponse.setFirstName(user.getFirstName());
            freelanceResponse.setLastName(user.getLastName());
            freelanceResponse.setId(freelancer.getId());
            freelanceResponse.setJoinDate(user.getJoinDate());
            freelanceResponses.add(freelanceResponse);
        }

        return freelanceResponses;
    }

    @Override
    public FreelanceResponse getFreelancer(Long id) {
        Freelancer freelancer = freelancerRepository.findFreelancerById(id);
        if (freelancer == null) {
            return null;
        }

        User user = freelancer.getUser();

        FreelanceResponse freelanceResponse = new FreelanceResponse();
        freelanceResponse.setFreelancerDTO(modelMapper.map(freelancer, FreelancerDTO.class));
        freelanceResponse.setUserName(user.getUserName());
        freelanceResponse.setEmail(user.getEmail());
        freelanceResponse.setFirstName(user.getFirstName());
        freelanceResponse.setId(freelancer.getId());
        freelanceResponse.setLastName(user.getLastName());
        freelanceResponse.setJoinDate(user.getJoinDate());

        return freelanceResponse;
    }
}
