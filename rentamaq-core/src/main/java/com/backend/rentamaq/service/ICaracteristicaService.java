package com.backend.rentamaq.service;

import com.backend.rentamaq.dto.salida.CaracteristicaSalidaDto;

import java.util.List;

public interface ICaracteristicaService {

    List<CaracteristicaSalidaDto> listarCaracteristicas();
}
