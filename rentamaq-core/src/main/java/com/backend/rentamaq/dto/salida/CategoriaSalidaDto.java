package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Producto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CategoriaSalidaDto {
    private Long id;
    private String titulo;
    private String descripcion;
    private String urlImagen;
    private List<Producto> products;
}
