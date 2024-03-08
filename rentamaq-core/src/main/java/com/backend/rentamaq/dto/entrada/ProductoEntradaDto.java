package com.backend.rentamaq.dto.entrada;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class ProductoEntradaDto {

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse el nombre del producto")
    private String nombre;

    @NotNull(message = "La descripcion del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse la descripcion del producto")
    private String descripcion;

    private String imagen;
}

