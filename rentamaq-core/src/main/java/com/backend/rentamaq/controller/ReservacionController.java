package com.backend.rentamaq.controller;

import com.backend.rentamaq.dto.ResponseDto;
import com.backend.rentamaq.dto.entrada.ActualizarReservacionDto;
import com.backend.rentamaq.dto.entrada.CrearReservacionDto;
import com.backend.rentamaq.dto.salida.ReservacionSalidaDto;
import com.backend.rentamaq.exception.BadRequestException;
import com.backend.rentamaq.security.jwt.JwtUtil;
import com.backend.rentamaq.service.impl.ReservacionService;
import io.jsonwebtoken.Jwt;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/reservaciones")
public class ReservacionController {
    private final ReservacionService reservacionService;
    @Autowired
    private JwtUtil jwtUtil;
    private String token = null;
    private Long userId = null;

    public ReservacionController(ReservacionService reservacionService) {
        this.reservacionService = reservacionService;
    }

    @PostMapping()
    public ResponseEntity<ReservacionSalidaDto> crearReservacion(@Valid @RequestBody CrearReservacionDto crearReservacionDto, HttpServletRequest request) throws BadRequestException {

        try {
            String autorizationHeader = request.getHeader("Authorization");
            if (autorizationHeader != null && autorizationHeader.startsWith("Bearer")) {
                token = autorizationHeader.substring(7);
                userId = jwtUtil.extractUserId(token);
            }
            crearReservacionDto.setUserId(userId);
            return new ResponseEntity<>(reservacionService.crearReservacion(crearReservacionDto), HttpStatus.CREATED);
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/producto/{productId}")
    public ResponseEntity<List<ReservacionSalidaDto>> listarReservasPorProductoId(@PathVariable Long productId) {
        return new ResponseEntity<>(reservacionService.listarReservasPorProductoId(productId), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ReservacionSalidaDto>> listarReservasPorUserId(@PathVariable Long userId) {
        return new ResponseEntity<>(reservacionService.listarReservasPorUserId(userId), HttpStatus.OK);
    }

    @GetMapping("/reserva/{id}")
    public ResponseEntity<ReservacionSalidaDto> buscarReservaPorId(@PathVariable Long id) throws BadRequestException {
        try {
            return new ResponseEntity<>(reservacionService.buscarReservaPorId(id), HttpStatus.OK);
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/reserva/{reservaId}")
    public ResponseEntity<ReservacionSalidaDto> actualizarReservaPorId(@PathVariable Long reservaId, @RequestBody ActualizarReservacionDto actualizarReservacionDto) throws BadRequestException {
        try {
            return new ResponseEntity<>(reservacionService.actualizar(reservaId, actualizarReservacionDto), HttpStatus.OK);
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/reserva/{id}")
    public ResponseEntity<ResponseDto> eliminarReserva(@PathVariable Long id) throws BadRequestException {
        try {
            reservacionService.eliminarReserva(id);
            return new ResponseEntity<>(new ResponseDto("Reserva eliminada."), HttpStatus.OK);
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }
    }

}
