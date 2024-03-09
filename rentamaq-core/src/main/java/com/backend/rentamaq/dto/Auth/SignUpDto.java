package com.backend.rentamaq.dto.Auth;


import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@Data
@NoArgsConstructor
public class SignUpDto {
    @NotNull
    private String name;
    @NotNull
    private String lastname;
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private Set<String> roles;
}
