package com.backend.rentamaq.controller;


import com.backend.rentamaq.dto.salida.CaracteristicaSalidaDto;
import com.backend.rentamaq.entity.Caracteristica;
import com.backend.rentamaq.service.ICaracteristicaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/caracteristicas")
public class CaracteristicaController {

    private final ICaracteristicaService caracteristicaService;

    public CaracteristicaController(ICaracteristicaService caracteristicaService) {
        this.caracteristicaService = caracteristicaService;
    }
    @GetMapping()
    public ResponseEntity<List<CaracteristicaSalidaDto>> listarCaracteristicas() {
        return new ResponseEntity<>(caracteristicaService.listarCaracteristicas(), HttpStatus.OK);
    }

    @GetMapping("/{productoId}")
    public List<Caracteristica> obtenerCaracteristicasPorProductoId(@PathVariable Long productoId) {
        return caracteristicaService.obtenerCaracteristicasPorProductoId(productoId);
    }
}
