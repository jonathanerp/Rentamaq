package com.backend.rentamaq.exception;

import lombok.Getter;

@Getter
public class BadRequestException extends Exception {
    private final String message;
    private final String entity;

    public BadRequestException(String message, String entity) {
        this.message = message;
        this.entity = entity;
    }
}
