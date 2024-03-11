package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.Auth.AuthenticateResponse;
import com.backend.rentamaq.dto.Auth.LoginDto;
import com.backend.rentamaq.dto.Auth.SignUpDto;
import com.backend.rentamaq.dto.ResponseDto;
import com.backend.rentamaq.exception.BadRequestException;
import com.backend.rentamaq.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseDto> signup(@RequestBody(required = true) SignUpDto data) throws BadRequestException {
        userService.signup(data);
        return new ResponseEntity<>(new ResponseDto("Usuario creado con exito!"), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticateResponse> login(@RequestBody(required = true) LoginDto data) throws BadRequestException {
        String token = userService.login(data);
        return new ResponseEntity<>(new AuthenticateResponse(token), HttpStatus.OK);
    }
}
