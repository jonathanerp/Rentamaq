package com.backend.rentamaq.dto.salida;

import com.backend.rentamaq.entity.Producto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ReservacionSalidaDto {
    private LocalDate inicioReservacion;
    private LocalDate finReservacion;
    private ProductoSalidaDto producto;
    private UserDto user;
}
