package com.backend.rentamaq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class RentamaqApplication {

	public static void main(String[] args) {
		SpringApplication.run(RentamaqApplication.class, args);
	}

}
