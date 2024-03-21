package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Categoria;
import com.backend.rentamaq.entity.Image;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ProductoSalidaDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private String imagenPrincipal;
    private List<Image> imagenes;
    private Categoria categoria;
}
