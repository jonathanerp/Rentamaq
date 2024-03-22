package com.backend.rentamaq.dto.entrada;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class CrearReservacionDto {
    @NotNull
    private LocalDate inicioReservacion;
    @NotNull
    private LocalDate finReservacion;
    @NotNull
    private Long productoId;
    private Long userId;
}
