package com.springboot.freelance.security;

import com.springboot.freelance.entity.Role;
import com.springboot.freelance.entity.User;
import com.springboot.freelance.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userNameOrEmail) throws UsernameNotFoundException {
        User user = userRepository.findByEmailOrUserName(userNameOrEmail, userNameOrEmail)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email:" + userNameOrEmail));

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassWord(), mapRoleToAuthority(user.getRole()));
    }

    private Collection<? extends GrantedAuthority> mapRoleToAuthority(Role role) {
        return Collections.singleton(new SimpleGrantedAuthority(role.getRole()));
    }
}
