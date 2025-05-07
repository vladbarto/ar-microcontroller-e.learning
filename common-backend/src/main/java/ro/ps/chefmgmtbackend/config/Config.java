package ro.ps.chefmgmtbackend.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ro.ps.chefmgmtbackend.mapper.UserMapper;
import ro.ps.chefmgmtbackend.mapper.WizardMapper;
import ro.ps.chefmgmtbackend.mapper.WizardPageMapper;
import ro.ps.chefmgmtbackend.repository.UserRepository;
import ro.ps.chefmgmtbackend.repository.WizardPageRepository;
import ro.ps.chefmgmtbackend.repository.WizardRepository;
import ro.ps.chefmgmtbackend.service.user.UserService;
import ro.ps.chefmgmtbackend.service.user.UserServiceBean;
import ro.ps.chefmgmtbackend.service.wizard.WizardService;
import ro.ps.chefmgmtbackend.service.wizard.WizardServiceBean;
import ro.ps.chefmgmtbackend.service.wizardPage.WizardPageService;
import ro.ps.chefmgmtbackend.service.wizardPage.WizardPageServiceBean;

@Configuration
public class Config {

    @Bean
    public UserService userServiceBean(
            UserRepository userRepository,
            UserMapper userMapper
    ) {
        return new UserServiceBean(userRepository, userMapper);
    }

    @Bean
    public WizardService wizardServiceBean(
            WizardRepository wizardRepository,
            WizardMapper wizardMapper,
            ObjectMapper objectMapper,
            @Value("${spring.application.name:BACKEND}") String applicationName
    ) {
        return new WizardServiceBean(wizardRepository, wizardMapper, objectMapper, applicationName);
    }

    @Bean
    public WizardPageService wizardPageServiceBean(
            WizardPageRepository wizardPageRepository,
            WizardPageMapper wizardPageMapper,
//            ObjectMapper objectMapper,
            @Value("${spring.application.name:BACKEND}") String applicationName
    ) {
        return new WizardPageServiceBean(wizardPageRepository, wizardPageMapper, applicationName);
    }
}
