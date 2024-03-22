package com.backend.rentamaq.exception;

import com.backend.rentamaq.dto.ErrorDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({MethodArgumentNotValidException.class, HttpMessageNotReadableException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> procesarValidationException(MethodArgumentNotValidException exception) {
        Map<String, String> exceptionMessage = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            exceptionMessage.put(fieldName, errorMessage);
        });
        return exceptionMessage;
    }

    @ExceptionHandler({Exception.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, String> procesarInternalServerError(Exception exception) {
        Map<String, String> exceptionMessage = new HashMap<>();
        String mensaje = exception.getMessage();

        if (exception.getMessage().startsWith("could not execute statement")) {
            exceptionMessage.put("nombre", "El nombre ya esta en uso");
        } else if (exception.getMessage().startsWith("Bad credentials")) {
            BadRequestException responseException = new BadRequestException("Contraseña o email incorrectos", "User");
            exceptionMessage.put("message", responseException.getMessage());
            exceptionMessage.put("entity", responseException.getEntity());
        } else {
            if (mensaje != null && !mensaje.isEmpty()) {
                int index = mensaje.lastIndexOf(":");
                if (index != -1 && index < mensaje.length() - 1) {
                    mensaje = mensaje.substring(index + 1).trim();
                }
            }
            exceptionMessage.put("message", mensaje);
        }
        return exceptionMessage;
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<?> badRequestException(BadRequestException ex, WebRequest req) {
        ErrorDto response = new ErrorDto(ex.getMessage(), ex.getEntity());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
