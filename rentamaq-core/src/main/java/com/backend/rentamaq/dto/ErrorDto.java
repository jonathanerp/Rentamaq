package com.backend.rentamaq.dto;

import lombok.Getter;

@Getter
public class ErrorDto {
    private final String message;
    private final String entity;

    public ErrorDto(String message, String entity) {
        this.message = message;
        this.entity = entity;
    }
}
