package ro.ps.licentabackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;
import ro.ps.licentabackend.service.wizard.WizardService;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
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

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<WizardResponseDTO> getWizardById(@PathVariable("id") UUID id) {
        return new ResponseEntity<>(
                wizardService.getById(id),
                HttpStatus.OK
        );
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<WizardResponseDTO> updateWizardById(@PathVariable("id") UUID id, @RequestBody WizardRequestDTO request) {
        log.info("Updating wizard with id {}", id);

        return new ResponseEntity<>(
                wizardService.updateWizardWithPages(id, request),
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
