package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.Auth.RoleDto;
import com.backend.rentamaq.entity.Role;
import com.backend.rentamaq.repository.RoleRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {
    private final RoleRepository roleRepository;
    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public void createRole(RoleDto data) {
        Role newRole = mapper.convertValue(data, Role.class);
        roleRepository.save(newRole);
    }
}
