package ro.ps.licentabackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ro.ps.licentabackend.controller.util.WizardUtil;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;

import ro.ps.licentabackend.service.wizard.WizardService;

import java.util.UUID;

/**
 * related to Wizards
 */
@Slf4j
@RestController
@RequestMapping("/json/v1")
@RequiredArgsConstructor
public class JsonController {

    private final WizardService wizardService;

    @PostMapping("/save")
    @PreAuthorize("hasRole('ADMIN')")
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

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<WizardResponseDTO> updateJson(@PathVariable UUID id, @RequestBody String requestBody) {
        log.info("Received over network: {}, {}", id, requestBody);

        WizardRequestDTO wizardRequestDTO = WizardUtil.requestBodyStringToRequestDTO(requestBody);

        if (wizardRequestDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Service handles establishing relationships
        // and saves (puts) everything at once using JPA cascades
        WizardResponseDTO updatedWizard = wizardService.updateWizardWithPages(id, wizardRequestDTO);
        return ResponseEntity.status(HttpStatus.OK).body(updatedWizard);
    }
}
