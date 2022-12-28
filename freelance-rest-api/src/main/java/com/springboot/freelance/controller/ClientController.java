package com.springboot.freelance.controller;

import com.springboot.freelance.payload.ClientDTO;
import com.springboot.freelance.payload.ClientResponse;
import com.springboot.freelance.payload.FileResponse;
import com.springboot.freelance.service.impl.ClientServiceImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Base64;

@RestController
@RequestMapping("/api/1.0")
public class ClientController {

    private ClientServiceImpl clientService;

    @Value("${project.images.clients}")
    private String imagePath;

    public ClientController(ClientServiceImpl clientService) {
        this.clientService = clientService;
    }

    @PreAuthorize(value = "hasAuthority('CLIENT')" + "and authentication.name.equals(@clientRepository.findClientById(#id).user.email)")
    @PutMapping("client/updateProfile/{id}")
    public ResponseEntity<ClientResponse> updateProfile(@Valid @RequestBody ClientDTO clientDTO, @PathVariable Long id) {
        ClientResponse clientResponse = clientService.updateClient(clientDTO, id);
        return new ResponseEntity<>(clientResponse, HttpStatus.OK);
    }

    @PreAuthorize(value = "hasAuthority('CLIENT')" + "and authentication.name.equals(@clientRepository.findClientById(#id).user.email)")
    @PostMapping("client/uploadImage/{id}")
    public ResponseEntity<FileResponse> uploadImage(@PathVariable Long id, @RequestParam("image")MultipartFile file) throws FileNotFoundException {
        String fileName;
        String fileUrl;

        fileName = clientService.uploadImageToFileSystem(file, id);
        fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(imagePath + File.separator + id + "/")
                .path(fileName)
                .toUriString();

        return new ResponseEntity<>(new FileResponse(fileName, fileUrl,"Image is successfully uploaded !!"), HttpStatus.OK);
    }

    @GetMapping(value = "client/retrieveImage/{id}",
            produces = {MediaType.IMAGE_JPEG_VALUE})
    public ResponseEntity<byte[]> retrieveImage(@PathVariable Long id) throws FileNotFoundException {
        byte[] imageData = Base64.getEncoder().encode(clientService.retrieveImageFromFileSystem(id));
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(MediaType.IMAGE_JPEG_VALUE))
                .body(imageData);
    }
}
