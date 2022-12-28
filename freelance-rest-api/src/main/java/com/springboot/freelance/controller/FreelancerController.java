package com.springboot.freelance.controller;

import com.springboot.freelance.payload.FileResponse;
import com.springboot.freelance.payload.FreelanceResponse;
import com.springboot.freelance.payload.FreelancerDTO;
import com.springboot.freelance.service.impl.FreelancerServiceImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.io.FileNotFoundException;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/1.0")
public class FreelancerController {

    private FreelancerServiceImpl freelancerService;

    @Value("${project.images}")
    private String imagePath;

    @Value("${project.resumes}")
    private String resumePath;

    public FreelancerController(FreelancerServiceImpl freelancerService) {
        this.freelancerService = freelancerService;
    }

    // api to update freelancer details
    @PreAuthorize(value = "hasAuthority('FREELANCER')" + "and authentication.name.equals(@freelancerRepository.findFreelancerById(#id).user.email)")
    @PutMapping(value = "freelancer/updateProfile/{id}")
    public ResponseEntity<FreelanceResponse> updateFreelancer(@Valid @RequestBody FreelancerDTO freelancerDTO, @PathVariable Long id) {
        FreelanceResponse freelanceResponse = freelancerService.updateFreelancer(freelancerDTO, id);
        return new ResponseEntity<>(freelanceResponse, HttpStatus.OK);

    }

    // api to upload image
    @PreAuthorize(value = "hasAuthority('FREELANCER')"+ "and authentication.name.equals(@freelancerRepository.findFreelancerById(#id).user.email)")
    @PostMapping(value = "freelancer/uploadImage/{id}")
    public ResponseEntity<FileResponse> uploadImage(@PathVariable Long id, @RequestParam("image")MultipartFile file) throws FileNotFoundException {
        String fileName;
        String fileUrl;

        fileName = freelancerService.uploadImageToFileSystem(file, id);
        fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(imagePath + id + "/")
                .path(fileName)
                .toUriString();

        return new ResponseEntity<>(new FileResponse(fileName, fileUrl,"Image is successfully uploaded !!"), HttpStatus.OK);
    }

    // api to delete image

    // api to retrieve image
    @GetMapping(value = "freelancer/retrieveImage/{id}",
    produces = {MediaType.IMAGE_JPEG_VALUE})
    public ResponseEntity<byte[]> retrieveImage(@PathVariable Long id) throws FileNotFoundException {
        byte[] imageData = Base64.getEncoder().encode(freelancerService.retrieveImageFromFileSystem(id));
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(MediaType.IMAGE_JPEG_VALUE))
                .body(imageData);
    }

    // api to save resume
    @PreAuthorize(value = "hasAuthority('FREELANCER')" + "and authentication.name.equals(@freelancerRepository.findFreelancerById(#id).user.email)")
    @PostMapping(value = "freelancer/uploadResume/{id}")
    public ResponseEntity<FileResponse> uploadResume(@PathVariable Long id, @RequestParam("resume")MultipartFile file) throws FileNotFoundException {
        String fileName;
        String fileUrl;

        fileName = freelancerService.uploadResumeToFileSystem(file, id);
        fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path(resumePath + id + "/")
                    .path(fileName)
                    .toUriString();

        return new ResponseEntity<>(new FileResponse(fileName, fileUrl, "Resume is successfully uploaded !!"), HttpStatus.OK);
    }

    // api to download resume
    @GetMapping(value = "freelancer/retrieveResume/{id}")
    public ResponseEntity<Resource> retrieveResume(@PathVariable Long id) throws FileNotFoundException {
        Resource resumeData;

        resumeData = freelancerService.retrieveResumeFromFileSystem(id);

        String contentType = null;

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=\"" + resumeData.getFilename() + "\"")
                .contentType(MediaType.parseMediaType(MediaType.APPLICATION_PDF_VALUE))
                .body(resumeData);
    }

    // api to get all freelancers
    @GetMapping(value = "/freelancers")
    public ResponseEntity<?> getFreelancers() {
        List<FreelanceResponse> freelancerDTOS = freelancerService.getFreelancers();
        if (freelancerDTOS.isEmpty()) {
            return new ResponseEntity<>("No freelancers found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(freelancerDTOS, HttpStatus.OK);
    }

    // api to get a single freelancer
    @GetMapping("/freelancer/{id}")
    public ResponseEntity<?> getFreelancer(@PathVariable Long id) {
        FreelanceResponse freelancerDTO = freelancerService.getFreelancer(id);
        if (freelancerDTO == null) {
            return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(freelancerDTO, HttpStatus.OK);
    }

}
