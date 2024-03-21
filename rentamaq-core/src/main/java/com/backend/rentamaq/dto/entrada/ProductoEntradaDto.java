package com.backend.rentamaq.dto.entrada;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductoEntradaDto {

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse el nombre del producto")
    String nombre;

    @NotNull(message = "La descripcion del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse la descripcion del producto")
    String descripcion;

    @NotNull
    MultipartFile imagenPrincipal;

    @NotNull
    List<MultipartFile> imagenes;

    Long categoriaId;
}

