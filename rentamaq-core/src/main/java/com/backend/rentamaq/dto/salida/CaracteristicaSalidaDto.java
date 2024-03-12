package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Producto;

public class CaracteristicaSalidaDto {
    private Long id;
    private String urlImagen;
    private String descripcion;
    private Producto producto;
    public CaracteristicaSalidaDto() {
    }

    public CaracteristicaSalidaDto(Long id, String urlImagen, String descripcion, Producto producto) {
        this.id = id;
        this.urlImagen = urlImagen;
        this.descripcion = descripcion;
        this.producto = producto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    @Override
    public String toString() {
        return "Id: " + id + " - URLImagen: " + urlImagen + " - Descripcion: " + descripcion + " - Producto: " + producto;
    }
}
