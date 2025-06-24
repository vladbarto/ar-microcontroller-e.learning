package ro.ps.licentabackend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import ro.ps.licentabackend.mapper.UserMapper;
import ro.ps.licentabackend.mapper.WizardMapper;
import ro.ps.licentabackend.mapper.WizardPageMapper;
import ro.ps.licentabackend.repository.UserRepository;
import ro.ps.licentabackend.repository.WizardPageRepository;
import ro.ps.licentabackend.repository.WizardRepository;
import ro.ps.licentabackend.service.user.UserService;
import ro.ps.licentabackend.service.user.UserServiceBean;
import ro.ps.licentabackend.service.wizard.WizardService;
import ro.ps.licentabackend.service.wizard.WizardServiceBean;
import ro.ps.licentabackend.service.wizardPage.WizardPageService;
import ro.ps.licentabackend.service.wizardPage.WizardPageServiceBean;

import java.util.List;

@Configuration
public class Config {

    @Bean
    public UserService userServiceBean(
            UserRepository userRepository,
            UserMapper userMapper,
            PasswordEncoder passwordEncoder
    ) {
        return new UserServiceBean(userRepository, userMapper, passwordEncoder);
    }

    @Bean
    public WizardService wizardServiceBean(
            WizardRepository wizardRepository,
            WizardMapper wizardMapper,
            @Value("${spring.application.name:BACKEND}") String applicationName
    ) {
        return new WizardServiceBean(wizardRepository, wizardMapper, applicationName);
    }

    @Bean
    public WizardPageService wizardPageServiceBean(
            WizardPageRepository wizardPageRepository,
            WizardPageMapper wizardPageMapper,
            @Value("${spring.application.name:BACKEND}") String applicationName
    ) {
        return new WizardPageServiceBean(wizardPageRepository, wizardPageMapper, applicationName);
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOriginPatterns(List.of("http://localhost:4200", "http://*:4200"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setExposedHeaders(List.of("Authorization", "Content-Type"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
