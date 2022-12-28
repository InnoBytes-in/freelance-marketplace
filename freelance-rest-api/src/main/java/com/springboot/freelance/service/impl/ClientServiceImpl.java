package com.springboot.freelance.service.impl;

import com.springboot.freelance.entity.Client;
import com.springboot.freelance.entity.User;
import com.springboot.freelance.payload.ClientDTO;
import com.springboot.freelance.payload.ClientResponse;
import com.springboot.freelance.repository.ClientRepository;
import com.springboot.freelance.service.ClientService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class ClientServiceImpl implements ClientService {
    private ClientRepository clientRepository;

    private ModelMapper modelMapper;

    @Value("${project.images.clients}")
    private String imagePath;

    public ClientServiceImpl(ClientRepository clientRepository, ModelMapper modelMapper) {
        this.clientRepository = clientRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ClientResponse updateClient(ClientDTO clientDTO, Long id) {
        Client client = clientRepository.findClientById(id);
        client.setTitle(clientDTO.getTitle());
        client.setDescription(clientDTO.getDescription());
        client.setCountry(clientDTO.getCountry());
        client.setCity(clientDTO.getCity());
        client.setNumber(clientDTO.getNumber());
        client.setOrganization(clientDTO.getOrganization());

        Client client1 = clientRepository.save(client);
        User user = client1.getUser();

        ClientResponse clientResponse = new ClientResponse();
        clientResponse.setClientDTO(modelMapper.map(client1, ClientDTO.class));
        clientResponse.setUserName(user.getUserName());
        clientResponse.setEmail(user.getEmail());
        clientResponse.setFirstName(user.getFirstName());
        clientResponse.setLastName(user.getLastName());
        clientResponse.setId(client1.getId());
        clientResponse.setJoinDate(user.getJoinDate());

        return clientResponse;
    }

    @Override
    public String uploadImageToFileSystem(MultipartFile file, Long id) throws FileNotFoundException {
        try {
            Client client = clientRepository.findClientById(id);

            if (client.getImage() != null) {
                String path = client.getImage();
                Files.delete(Paths.get(path));
                client.setImage(null);
            }

            String filePath = imagePath + File.separator + id;
            File file1 = new File(filePath);
            if (!file1.exists()) file1.mkdir();
            filePath = filePath + "/" + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            client.setImage(filePath);
            clientRepository.save(client);

            return file.getOriginalFilename();
        } catch (Exception e) {
            throw new FileNotFoundException("Image not found for downloading");
        }
    }

    @Override
    public byte[] retrieveImageFromFileSystem(Long id) throws FileNotFoundException {
        try {
            Client client = clientRepository.findClientById(id);
            String filePath = client.getImage();
            return Files.readAllBytes(new File(filePath).toPath());
        } catch (Exception e) {
            throw new FileNotFoundException("Image not found for downloading");
        }
    }
}
