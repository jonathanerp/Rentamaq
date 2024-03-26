package com.backend.rentamaq.dto.entrada;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriaEntradaDto {

    @NotNull(message = "El titulo de la categoria no puede ser nulo")
    @NotBlank(message = "Debe especificarse el titulo de la categoria")
    String titulo;

    @NotNull(message = "La descripcion de la categoria no puede ser nula")
    @NotBlank(message = "Debe especificarse la descripcion de la categoria")
    String descripcion;

    @NotNull
    MultipartFile imagen;

}
