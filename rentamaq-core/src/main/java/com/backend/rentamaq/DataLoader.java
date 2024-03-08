package com.backend.rentamaq;

import com.backend.rentamaq.entity.Role;
import com.backend.rentamaq.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    private final RoleRepository roleRepository;

    @Autowired
    public DataLoader(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Verificar si los roles por defecto ya existen
        if (!roleRepository.existsByName("ROLE_ADMIN")) {
            // Si no existe, crear el rol de administrador
            Role adminRole = new Role("ROLE_ADMIN");
            roleRepository.save(adminRole);
        }

        if (!roleRepository.existsByName("ROLE_USER")) {
            // Si no existe, crear el rol de usuario
            Role userRole = new Role("ROLE_USER");
            roleRepository.save(userRole);
        }
    }
}
