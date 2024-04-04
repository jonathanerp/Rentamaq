package com.backend.rentamaq.service.impl;

import com.backend.rentamaq.dto.entrada.ActualizarReservacionDto;
import com.backend.rentamaq.dto.entrada.CrearReservacionDto;
import com.backend.rentamaq.dto.salida.ReservacionSalidaDto;
import com.backend.rentamaq.entity.Producto;
import com.backend.rentamaq.entity.Reservacion;
import com.backend.rentamaq.entity.User;
import com.backend.rentamaq.exception.BadRequestException;
import com.backend.rentamaq.repository.ProductoRepository;
import com.backend.rentamaq.repository.ReservacionRepository;
import com.backend.rentamaq.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ReservacionService {
    private final Logger LOGGER = LoggerFactory.getLogger(ReservacionService.class);
    private final ReservacionRepository reservacionRepository;
    private final ProductoRepository productoRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;


    public ReservacionService(ReservacionRepository reservacionRepository, ProductoRepository productoRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.reservacionRepository = reservacionRepository;
        this.productoRepository = productoRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    private ReservacionSalidaDto entidadADtoSalida(Reservacion reservacion) {
        return modelMapper.map(reservacion, ReservacionSalidaDto.class);
    }

    public ReservacionSalidaDto crearReservacion(CrearReservacionDto crearReservacionDto) throws BadRequestException {
        Reservacion reservacion = new Reservacion();

        Optional<User> user = userRepository.findById(crearReservacionDto.getUserId());
        if (user.isEmpty()) {
            throw new BadRequestException("Producto not found", "Reservacion");
        }

        Optional<Producto> producto = productoRepository.findById(crearReservacionDto.getProductoId());

        if (producto.isEmpty()) {
            throw new BadRequestException("Producto not found", "Reservacion");
        }
        if (crearReservacionDto.getInicioReservacion().isBefore(LocalDate.now())) {
            throw new BadRequestException("Fecha de inicio de reservacion incorrecta", "Reservacion");
        }
        if (crearReservacionDto.getFinReservacion().isBefore(LocalDate.now())) {
            throw new BadRequestException("Fecha de fin de reservacion incorrecta", "Reservacion");
        }
        if (crearReservacionDto.getFinReservacion().isBefore(crearReservacionDto.getInicioReservacion())) {
            throw new BadRequestException("Fecha de fin de reservacion incorrecta", "Reservacion");
        }
        List<Reservacion> reservaciones = reservacionRepository.findAllByProductoId(producto.get().getId());
        LocalDate inicioNuevaReservacion = crearReservacionDto.getInicioReservacion();
        LocalDate finNuevaReservacion = crearReservacionDto.getFinReservacion();

        for (Reservacion reser : reservaciones) {
            LocalDate inicioExistente = reser.getInicioReservacion();
            LocalDate finExistente = reser.getFinReservacion();

            if ((inicioNuevaReservacion.isAfter(inicioExistente) && inicioNuevaReservacion.isBefore(finExistente)) ||
                    (finNuevaReservacion.isAfter(inicioExistente) && finNuevaReservacion.isBefore(finExistente)) ||
                    (inicioNuevaReservacion.isBefore(inicioExistente) && finNuevaReservacion.isAfter(finExistente)) ||
                    (inicioNuevaReservacion.isEqual(inicioExistente) || finNuevaReservacion.isEqual(finExistente))) {
                throw new BadRequestException("ERROR! - La fecha de la nueva reservación se superpone con otra reservación existente", "Reservacion");
            }
        }


        reservacion.setUser(user.get());
        reservacion.setInicioReservacion(crearReservacionDto.getInicioReservacion());
        reservacion.setFinReservacion(crearReservacionDto.getFinReservacion());
        reservacion.setProducto(producto.get());

        Reservacion resultadoProducto = reservacionRepository.save(reservacion);

        ReservacionSalidaDto productoSalidaDto = entidadADtoSalida(resultadoProducto);

        LOGGER.info("Reservacion creada : {}", productoSalidaDto);

        return productoSalidaDto;
    }

    public List<ReservacionSalidaDto> listarReservasPorProductoId(Long productoId) {
        List<ReservacionSalidaDto> listaReservas = new java.util.ArrayList<>(reservacionRepository.findAllByProductoId(productoId).stream()
                .map(this::entidadADtoSalida).toList());

        LOGGER.info("Listado de todas las reservas: {}", listaReservas);
        Collections.shuffle(listaReservas);
        return listaReservas;
    }

    public List<ReservacionSalidaDto> listarReservasPorUserId(Long userId) {
        List<ReservacionSalidaDto> listaReservas = new java.util.ArrayList<>(reservacionRepository.findAllByUserId(userId).stream()
                .map(this::entidadADtoSalida).toList());

        LOGGER.info("Listado de todas las reservas: {}", listaReservas);
        Collections.shuffle(listaReservas);
        return listaReservas;
    }

    public ReservacionSalidaDto buscarReservaPorId(Long id) throws BadRequestException {
        Optional<Reservacion> reservaBuscado = reservacionRepository.findById(id);
        if (reservaBuscado.isEmpty()) {
            throw new BadRequestException("Reservation not found", "Reservacion");
        }
        ReservacionSalidaDto reservacionSalidaDto = entidadADtoSalida(reservaBuscado.get());
        LOGGER.info("Producto encontrado: {}", reservacionSalidaDto);
        return reservacionSalidaDto;
    }

    public ReservacionSalidaDto actualizar(Long reservaId, ActualizarReservacionDto actualizarReservacionDto) throws BadRequestException {
        Optional<Reservacion> reservaBuscado = reservacionRepository.findById(reservaId);
        if (reservaBuscado.isEmpty()) {
            throw new BadRequestException("Reservation not found", "Reservacion");
        }
        Reservacion reserva = reservaBuscado.get();

        if (actualizarReservacionDto.getProductoId() != null) {
            Optional<Producto> producto = productoRepository.findById(actualizarReservacionDto.getProductoId());

            if (producto.isEmpty()) {
                throw new BadRequestException("Producto not found", "Reservacion");
            }
            reserva.setProducto((producto.get()));
        }

        if (actualizarReservacionDto.getInicioReservacion() != null && actualizarReservacionDto.getFinReservacion() != null) {
            if (actualizarReservacionDto.getInicioReservacion().isBefore(LocalDate.now())) {
                throw new BadRequestException("Fecha de inicio de reservacion incorrecta", "Reservacion");
            }
            if (actualizarReservacionDto.getFinReservacion().isBefore(LocalDate.now())) {
                throw new BadRequestException("Fecha de fin de reservacion incorrecta", "Reservacion");
            }
            if (actualizarReservacionDto.getFinReservacion().isBefore(actualizarReservacionDto.getInicioReservacion())) {
                throw new BadRequestException("Fecha de fin de reservacion incorrecta", "Reservacion");
            }
            List<Reservacion> reservaciones = reservacionRepository.findAll();

            LocalDate inicioNuevaReservacion = actualizarReservacionDto.getInicioReservacion();
            LocalDate finNuevaReservacion = actualizarReservacionDto.getFinReservacion();

            for (Reservacion reser : reservaciones) {
                LocalDate inicioExistente = reser.getInicioReservacion();
                LocalDate finExistente = reser.getFinReservacion();

                if ((inicioNuevaReservacion.isAfter(inicioExistente) && inicioNuevaReservacion.isBefore(finExistente)) ||
                        (finNuevaReservacion.isAfter(inicioExistente) && finNuevaReservacion.isBefore(finExistente)) ||
                        (inicioNuevaReservacion.isBefore(inicioExistente) && finNuevaReservacion.isAfter(finExistente)) ||
                        (inicioNuevaReservacion.isEqual(inicioExistente) || finNuevaReservacion.isEqual(finExistente))) {
                    throw new BadRequestException("ERROR! - La fecha de la nueva reservación se superpone con otra reservación existente", "Reservacion");
                }
            }

            reserva.setInicioReservacion(actualizarReservacionDto.getInicioReservacion());
            reserva.setFinReservacion(actualizarReservacionDto.getFinReservacion());
        }
        if (actualizarReservacionDto.getInicioReservacion() == null && actualizarReservacionDto.getFinReservacion() != null || actualizarReservacionDto.getInicioReservacion() != null && actualizarReservacionDto.getFinReservacion() == null) {
            throw new BadRequestException("Debes proporcionar una Fecha de Inicio y una Fecha de Fin de reserva.", "Reservacion");
        }


        Reservacion res = reservacionRepository.save(reserva);

        return entidadADtoSalida(res);
    }

    public void eliminarReserva(Long id) throws BadRequestException {
        buscarReservaPorId(id);
        reservacionRepository.deleteById(id);
    }
}
