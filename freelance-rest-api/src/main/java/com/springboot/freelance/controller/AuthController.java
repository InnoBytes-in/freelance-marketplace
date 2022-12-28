package com.springboot.freelance.controller;

import com.springboot.freelance.entity.Client;
import com.springboot.freelance.entity.Freelancer;
import com.springboot.freelance.entity.Role;
import com.springboot.freelance.entity.User;
import com.springboot.freelance.payload.JWTAuthResponse;
import com.springboot.freelance.payload.LoginDTO;
import com.springboot.freelance.payload.SignUpDTO;
import com.springboot.freelance.repository.ClientRepository;
import com.springboot.freelance.repository.FreelancerRepository;
import com.springboot.freelance.repository.RoleRepository;
import com.springboot.freelance.repository.UserRepository;
import com.springboot.freelance.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Objects;

@RestController
@RequestMapping("/api/1.0/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FreelancerRepository freelancerRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDTO.getUserNameOrEmail(), loginDTO.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = null;

        if (userRepository.existsByUserName(loginDTO.getUserNameOrEmail())) {
            user = userRepository.findByUserName(loginDTO.getUserNameOrEmail()).get();
        } else if(userRepository.existsByEmail(loginDTO.getUserNameOrEmail())) {
            user = userRepository.findByEmail(loginDTO.getUserNameOrEmail()).get();
        }

        if (user == null) {
            return new ResponseEntity<>("Invalid Login", HttpStatus.UNAUTHORIZED);
        }

        String token = jwtTokenProvider.generateToken(authentication);
        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse(token);

        jwtAuthResponse.setUserName(user.getUserName());
        jwtAuthResponse.setFirstName(user.getFirstName());
        jwtAuthResponse.setLastName(user.getLastName());
        jwtAuthResponse.setEmail(user.getEmail());
        jwtAuthResponse.setJoinDate(user.getJoinDate());
        jwtAuthResponse.setRole(user.getRole());

        if(user.getFreelancer() != null) {
            jwtAuthResponse.setId(user.getFreelancer().getId());
        } else if (user.getClient() != null) {
            jwtAuthResponse.setId(user.getClient().getId());
        }

        return ResponseEntity.ok(jwtAuthResponse);
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpDTO signUpDTO) {
        User user = new User();
        user.setFirstName(signUpDTO.getFirstName());
        user.setLastName(signUpDTO.getLastName());
        user.setEmail(signUpDTO.getEmail());
        user.setPassWord(passwordEncoder.encode(signUpDTO.getPassword()));
        user.setUserName(signUpDTO.getUserName());
        user.setJoinDate(signUpDTO.getJoinDate());

        System.out.println(signUpDTO.getRole());

        Role roleDB = roleRepository.findByRole(signUpDTO.getRole());
        user.setRole(roleDB);

        System.out.println(roleDB);

        userRepository.save(user);

        if (Objects.equals(signUpDTO.getRole(), "FREELANCER")) {
            Freelancer freelancer = new Freelancer();
            freelancer.setUser(user);
            user.setFreelancer(freelancer);
            freelancerRepository.save(freelancer);
        }

        if (Objects.equals(signUpDTO.getRole(), "CLIENT")) {
            Client client = new Client();
            client.setUser(user);
            user.setClient(client);
            clientRepository.save(client);
        }

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

}
