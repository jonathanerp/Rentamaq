package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Role;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
public class UserDto {
    @NotNull
    private String name;
    @NotNull
    private String lastname;
    @NotNull
    private String email;
    private Set<Role> roles;

}
