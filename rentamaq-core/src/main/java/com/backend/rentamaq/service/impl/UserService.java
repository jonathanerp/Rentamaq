package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.entity.Role;
import com.backend.rentamaq.entity.User;
import com.backend.rentamaq.exception.BadRequestException;
import com.backend.rentamaq.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.backend.rentamaq.dto.Auth.LoginDto;
import com.backend.rentamaq.dto.Auth.SignUpDto;

import com.backend.rentamaq.repository.RoleRepository;
import com.backend.rentamaq.security.jwt.CustomerDetailsService;
import com.backend.rentamaq.security.jwt.JwtUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    private final Logger LOGGER = Logger.getLogger(UserService.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private CustomerDetailsService customerDetailsService;
    @Autowired
    private ObjectMapper mapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);


    public void signup(SignUpDto data) throws BadRequestException {
        if (userRepository.findByEmail(data.getEmail()).isPresent()) {
            throw new BadRequestException("Este usuario ya existe!", "User");
        }

        Set<Role> roles = new HashSet<>();

        for (String role : data.getRoles()) {
            Role findRole = roleRepository.findByName(role);
            if (findRole == null) throw new BadRequestException("Role " + role + " no encontrado", "Roles");
            roles.add(findRole);
        }

        User newUser = new User();
        newUser.setEmail(data.getEmail());
        newUser.setName(data.getName());
        newUser.setLastname(data.getLastname());
        newUser.setPassword(bCryptPasswordEncoder.encode(data.getPassword()));
        newUser.setRoles(roles);

        userRepository.save(newUser);
    }

    public String login(LoginDto data) throws BadRequestException {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword()));
        if (authentication.isAuthenticated()) {
            Optional<User> user = userRepository.findByEmail(customerDetailsService.getUserDetail().getEmail());
            return jwtUtil.generateToken(user.get().getId(), customerDetailsService.getUserDetail().getRoles());
        } else {
            throw new BadRequestException("Contraseña o email incorrectos", "User");
        }
    }

}
