package com.springboot.freelance.service;

import com.springboot.freelance.payload.FreelanceResponse;
import com.springboot.freelance.payload.FreelancerDTO;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface FreelancerService {
    FreelanceResponse updateFreelancer(FreelancerDTO freelancerDTO, Long id);
    String uploadImageToFileSystem(MultipartFile file, Long id) throws IOException;
    byte[] retrieveImageFromFileSystem(Long id) throws IOException;
    String uploadResumeToFileSystem(MultipartFile file, Long id) throws IOException;
    Resource retrieveResumeFromFileSystem(Long id) throws IOException;
    List<FreelanceResponse> getFreelancers();
    FreelanceResponse getFreelancer(Long id);
}
