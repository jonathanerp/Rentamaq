package com.backend.rentamaq.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfiguracionMapper {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
