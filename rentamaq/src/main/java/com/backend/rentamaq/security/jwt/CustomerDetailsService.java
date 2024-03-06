package com.backend.rentamaq.security.jwt;

import com.backend.rentamaq.entity.Role;
import com.backend.rentamaq.entity.User;
import com.backend.rentamaq.repository.UserRepository;
import lombok.Getter;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Service
public class CustomerDetailsService implements UserDetailsService {
    private final Logger LOGGER = Logger.getLogger(CustomerDetailsService.class);
    @Autowired
    private UserRepository userRepository;
    @Getter
    private User userDetail;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LOGGER.info("Dentro de loadUserByEmail -> " + username);
        userDetail = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("username not found"));

        if (!Objects.isNull(userDetail)) {
            LOGGER.info("DENTRO DEL IF -" + userDetail.getUsername() + " -> " + userDetail.getEmail());

            Set<Role> roles = userRepository.findRolesByUserId(userDetail.getId());
            userDetail.setRoles(roles);

            Set<GrantedAuthority> autorizaciones = new HashSet<>();
            GrantedAuthority autorizacion = null;

            for (Role role : userDetail.getRoles()) {
                LOGGER.info("Roles de -> " + userDetail.getUsername());
                autorizacion = new SimpleGrantedAuthority(role.getName());
                autorizaciones.add(autorizacion);
            }
            return new org.springframework.security.core.userdetails.User(userDetail.getUsername(), userDetail.getPassword(), autorizaciones);
        } else {
            throw new UsernameNotFoundException("User " + username + " not found");
        }
    }
}
