package ro.ps.licentabackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class LicentaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(LicentaBackendApplication.class, args);
    }

}
