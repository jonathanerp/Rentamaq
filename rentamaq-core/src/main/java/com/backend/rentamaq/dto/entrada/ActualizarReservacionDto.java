package com.backend.rentamaq.dto.entrada;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class ActualizarReservacionDto {
    private LocalDate inicioReservacion;
    private LocalDate finReservacion;
    private Long productoId;
}
