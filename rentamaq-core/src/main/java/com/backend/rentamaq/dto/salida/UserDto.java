package com.backend.rentamaq.dto.salida;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class UserDto {
    @NotNull
    private String name;
    @NotNull
    private String lastname;
    @NotNull
    private String email;

}
