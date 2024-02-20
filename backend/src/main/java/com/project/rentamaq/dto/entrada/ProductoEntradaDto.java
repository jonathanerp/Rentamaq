package com.project.rentamaq.dto.entrada;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.*;
import org.springframework.web.multipart.MultipartFile;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductoEntradaDto {

    @NotNull(message = "El nombre del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse el nombre del producto")
    private String nombre;

    @NotNull(message = "La descripcion del producto no puede ser nulo")
    @NotBlank(message = "Debe especificarse la descripcion del producto")
    private String descripcion;

    private MultipartFile imagen;

    public ProductoEntradaDto() {
    }

    public ProductoEntradaDto(String nombre, String descripcion, MultipartFile imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public MultipartFile getImagen() { return imagen; }

    public void setImagen(MultipartFile imagen) { this.imagen = imagen; }
}
