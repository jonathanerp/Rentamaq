package com.project.rentamaq.entity;

import jakarta.persistence.*;

@Entity
@Table(name="productos")

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    @Column(columnDefinition = "TEXT")
    private String descripcion;
    private String nombreImagen;

    public Producto() {
    }

    public Producto(String nombre, String descripcion, String nombreImagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nombreImagen = nombreImagen;
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

    public String getNombreImagen() { return nombreImagen;}

    public void setNombreImagen(String rutaImagen) { this.nombreImagen = rutaImagen; }

    @Override
    public String toString() {
        return "Id: " + id + " - Nombre: " + nombre + " - Descripcion: " + descripcion + " - RutaImagen: " + nombreImagen;
    }
}
