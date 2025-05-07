package ro.ps.chefmgmtbackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.ps.chefmgmtbackend.controller.util.WizardUtil;
import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;

import ro.ps.chefmgmtbackend.service.wizard.WizardService;
import ro.ps.chefmgmtbackend.service.wizardPage.WizardPageService;

/**
 * related to Wizards
 */
@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/json/v1")
@RequiredArgsConstructor
public class JsonController {

    private final WizardService wizardService;
    private final WizardPageService wizardPageService;
    @PostMapping("/save")
    public ResponseEntity<WizardResponseDTO> saveJson(@RequestBody String requestBody) {
        log.info("Received over network: {}", requestBody);

        WizardRequestDTO wizardRequestDTO = WizardUtil.requestBodyStringToRequestDTO(requestBody);
        log.info("Wizard deserialized successfully: {}, {}",
                wizardRequestDTO.getPages(),
                wizardRequestDTO.getAim());

        if (wizardRequestDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Service handles establishing relationships
        // and saves everything at once using JPA cascades
        WizardResponseDTO savedWizard = wizardService.saveWizardWithPages(wizardRequestDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedWizard);
    }
}
