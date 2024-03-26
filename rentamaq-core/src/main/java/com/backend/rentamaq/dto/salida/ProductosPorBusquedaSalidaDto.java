package com.backend.rentamaq.dto.salida;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ProductosPorBusquedaSalidaDto {

    private String nombre;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
}
