package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.Auth.RoleDto;
import com.backend.rentamaq.dto.salida.UserDto;
import com.backend.rentamaq.entity.Role;
import com.backend.rentamaq.entity.User;
import com.backend.rentamaq.exception.BadRequestException;
import com.backend.rentamaq.repository.UserRepository;
import com.backend.rentamaq.dto.Auth.LoginDto;
import com.backend.rentamaq.dto.Auth.SignUpDto;
import com.backend.rentamaq.repository.RoleRepository;
import com.backend.rentamaq.security.jwt.CustomerDetailsService;
import com.backend.rentamaq.security.jwt.JwtUtil;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
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
    private final ModelMapper modelMapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(12);

    public UserService(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    private UserDto toDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

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
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtUtil.generateToken(customerDetailsService.getUserDetail().getEmail(), customerDetailsService.getUserDetail().getId(), customerDetailsService.getUserDetail().getRoles());
        } else {
            throw new BadRequestException("Contraseña o email incorrectos", "User");
        }
    }

    public UserDto findUserById(Long id) throws BadRequestException {
        Optional<User> userResult = this.userRepository.findById(id);

        if (userResult.isEmpty()) {
            throw new BadRequestException("User not found", "User");
        }

        User user = userResult.get();
        return toDto(user);
    }

    public List<UserDto> findAll() {
        List<User> users = this.userRepository.findAll();
        List<UserDto> usersDto = new ArrayList<>();
        for (User user : users) {
            UserDto userResult = toDto(user);
            Set<Role> roles = this.userRepository.findRolesByUserId(user.getId());
            userResult.setRoles(roles);

            usersDto.add(userResult);
        }
        return usersDto;
    }

    public void setRole(RoleDto data, Long id) throws BadRequestException {
        Role role = this.roleRepository.findByName(data.getName());

        if (role == null) {
            throw new BadRequestException("Invalid role", "User");
        }

        Optional<User> userResult = this.userRepository.findById(id);

        if (userResult.isEmpty()) {
            throw new BadRequestException("User not found", "User");
        }

        User user = userResult.get();
        Set<Role> userRoles = user.getRoles();

        userRoles.add(role);

        try {
            this.userRepository.save(user);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
