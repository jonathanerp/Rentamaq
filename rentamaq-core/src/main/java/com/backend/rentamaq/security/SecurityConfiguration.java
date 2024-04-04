package com.backend.rentamaq.security;

import com.backend.rentamaq.security.jwt.CustomerDetailsService;
import com.backend.rentamaq.security.jwt.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    @Autowired
    private JwtFilter jwtFilter;
    @Autowired
    private CustomerDetailsService customerDetailsService;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public SecurityConfiguration() {
    }

    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors(request -> new CorsConfiguration().applyPermitDefaultValues())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers(
                                        "/imagenes/**",
                                        "/productos",
                                        "/caracteristicas/**",
                                        "/reservaciones/**",
                                        "/productos/**",
                                        "/roles",
                                        "/user/**",
                                        "/user",
                                        "/categorias/**"
                                        ).permitAll()
//                        .requestMatchers(HttpMethod.POST, "api/v1/**").hasRole("ADMIN")
//                        .requestMatchers(HttpMethod.GET, "api/v1/**").hasAnyRole("USER", "ADMIN")
//                        .requestMatchers(HttpMethod.PUT, "api/v1/**").hasRole("ADMIN")
//                        .requestMatchers(HttpMethod.DELETE, "api/v1/**").hasRole("ADMIN")
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(request -> request.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .exceptionHandling(request -> request
                        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                )
        ;
        httpSecurity.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(customerDetailsService);
        return provider;
    }
}