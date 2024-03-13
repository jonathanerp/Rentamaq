package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.salida.CaracteristicaSalidaDto;
import com.backend.rentamaq.entity.Caracteristica;

import java.util.List;

public interface ICaracteristicaService {

    List<CaracteristicaSalidaDto> listarCaracteristicas();

    List<Caracteristica> obtenerCaracteristicasPorProductoId(Long productoId);
}
