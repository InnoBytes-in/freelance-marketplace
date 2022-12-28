package com.springboot.freelance.service;

import com.springboot.freelance.payload.ClientDTO;
import com.springboot.freelance.payload.ClientResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ClientService {
    ClientResponse updateClient(ClientDTO clientDTO, Long id);
    String uploadImageToFileSystem(MultipartFile file, Long id) throws IOException;
    byte[] retrieveImageFromFileSystem(Long id) throws IOException;
}
