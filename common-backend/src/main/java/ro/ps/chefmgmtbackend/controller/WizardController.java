package ro.ps.chefmgmtbackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;
import ro.ps.chefmgmtbackend.service.wizard.WizardService;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/wizard/v1")
@RequiredArgsConstructor
public class WizardController {
    private final WizardService wizardService;

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("/all-main")
    public ResponseEntity<List<WizardResponseDTO>> getAllWizards() {
        return new ResponseEntity<>(
                wizardService.getAllWizards(),
                HttpStatus.OK
        );
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @DeleteMapping("/delete/{wizardId}")
    public ResponseEntity<WizardResponseDTO> deleteWizard(@PathVariable("wizardId") UUID wizardId) {
        return new ResponseEntity<>(
                wizardService.deleteById(wizardId),
                HttpStatus.OK
        );
    }
}
