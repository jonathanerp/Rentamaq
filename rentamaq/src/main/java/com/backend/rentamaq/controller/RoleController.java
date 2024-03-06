package com.backend.rentamaq.controller;


import com.backend.rentamaq.dto.Auth.RoleDto;
import com.backend.rentamaq.service.impl.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/roles")
public class RoleController {
    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @PostMapping()
    public ResponseEntity<String> createRole(@RequestBody RoleDto rol) {
        try {
            roleService.createRole(rol);
            return new ResponseEntity<>("Rol Created", HttpStatus.CREATED);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage(), e);
        }
    }
}
