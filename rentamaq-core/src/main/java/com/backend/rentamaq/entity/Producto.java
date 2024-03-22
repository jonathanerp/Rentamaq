package com.backend.rentamaq.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "productos", uniqueConstraints = @UniqueConstraint(columnNames = "nombre"))
@Data
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String nombre;
    @Column(columnDefinition = "TEXT")
    private String descripcion;
    @Column
    private String imagenPrincipal;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    @JsonIgnore
    private Categoria categoria;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<Image> imagenes;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<Caracteristica> caracteristicas;

    public Producto() {
    }

    @Override
    public String toString() {
        return "";
    }
}
