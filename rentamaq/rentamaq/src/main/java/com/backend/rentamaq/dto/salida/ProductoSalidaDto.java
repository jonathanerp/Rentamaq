package com.backend.rentamaq.dto.salida;

public class ProductoSalidaDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private String urlImagen;

    public ProductoSalidaDto() {
    }

    public ProductoSalidaDto(Long id, String nombre, String descripcion, String urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    @Override
    public String toString() {
        return "Id: " + id + " - Nombre: " + nombre + " - Descripcion: " + descripcion + " - URLImagen: " + urlImagen;
    }
}
