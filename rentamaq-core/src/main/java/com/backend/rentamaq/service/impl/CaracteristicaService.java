package com.backend.rentamaq.service.impl;


import com.backend.rentamaq.dto.salida.CaracteristicaSalidaDto;
import com.backend.rentamaq.dto.salida.CategoriaSalidaDto;
import com.backend.rentamaq.entity.Caracteristica;
import com.backend.rentamaq.repository.CaracteristicaRepository;
import com.backend.rentamaq.service.ICaracteristicaService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicaService implements ICaracteristicaService {

    private final Logger LOGGER = LoggerFactory.getLogger(CaracteristicaService.class);
    private final CaracteristicaRepository caracteristicaRepository;

    private final ModelMapper modelMapper;

    public CaracteristicaService(CaracteristicaRepository caracteristicaRepository, ModelMapper modelMapper) {
        this.caracteristicaRepository = caracteristicaRepository;
        this.modelMapper = modelMapper;
    }

    private CaracteristicaSalidaDto entidadADtoSalida(Caracteristica caracteristica) {
        return modelMapper.map(caracteristica, CaracteristicaSalidaDto.class);
    }

    @Override
    public List<CaracteristicaSalidaDto> listarCaracteristicas() {
        List<CaracteristicaSalidaDto> listaCaracteristicas = new java.util.ArrayList<>(caracteristicaRepository.findAll().stream()
                .map(this::entidadADtoSalida).toList());

        LOGGER.info("Listado de todas las caracteristicas: {}", listaCaracteristicas);
        return listaCaracteristicas;
    }
}
