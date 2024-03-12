package com.backend.rentamaq.dto.entrada;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    private Long categoriaId;

    public ProductoEntradaDto() {
    }

    public ProductoEntradaDto(String nombre, String descripcion, MultipartFile imagen, Long categoriaId) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoriaId = categoriaId;
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

    public Long getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(Long categoriaId) {
        this.categoriaId = categoriaId;
    }
}

