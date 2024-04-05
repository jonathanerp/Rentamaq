FROM ubuntu:latest
RUN apt-get update
RUN apt-get install openjdk-20-jdk -y
COPY . .
RUN ./mvnw spring-boot:run

FROM openjdk:20
EXPOSE 8080
COPY --from=build /target/rentamaq-0.0.1-SNAPSHOT.jar .

ENTRYPOINT ["java", "-jar","rentamaq-0.0.1-SNAPSHOT.jar "]