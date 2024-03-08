package com.backend.rentamaq.dto.Auth;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;


@Getter
public class AuthenticateResponse {
    @NotNull
    private String token;
    public AuthenticateResponse(String token) {
        this.token = token;
    }
}
