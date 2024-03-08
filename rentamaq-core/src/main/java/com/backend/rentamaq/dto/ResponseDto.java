package com.backend.rentamaq.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ResponseDto {
    private String message;

    public ResponseDto(String message) {
        this.message = message;
    }
}
