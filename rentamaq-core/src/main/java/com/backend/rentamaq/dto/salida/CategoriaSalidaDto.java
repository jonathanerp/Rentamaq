package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Producto;

public class CategoriaSalidaDto {
    private Long id;
    private String titulo;
    private String descripcion;
    private String urlImagen;

    public CategoriaSalidaDto() {
    }

    public CategoriaSalidaDto(Long id, String titulo, String descripcion, String urlImagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    @Override
    public String toString() {
        return "Id: " + id + " - Titulo: " + titulo + " - Descripcion: " + descripcion + " - URLImagen: " + urlImagen;
    }
}
