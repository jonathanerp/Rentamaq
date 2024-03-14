package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.Auth.AuthenticateResponse;
import com.backend.rentamaq.dto.Auth.LoginDto;
import com.backend.rentamaq.dto.Auth.RoleDto;
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
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/{id}")
    public ResponseEntity getUser(@PathVariable Long id) throws BadRequestException {
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity getUsersByRole() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/{id}/set-role")
    public ResponseEntity<ResponseDto> setRole(@PathVariable Long id, @RequestBody(required = true) RoleDto data) throws BadRequestException {
        userService.setRole(data, id);
        return new ResponseEntity<>(new ResponseDto("Nuevo rol asignado!"), HttpStatus.OK);
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
