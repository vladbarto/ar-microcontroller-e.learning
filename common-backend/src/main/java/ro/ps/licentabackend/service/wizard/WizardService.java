package ro.ps.licentabackend.service.wizard;

import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;

import java.util.List;
import java.util.UUID;

public interface WizardService {

    List<WizardResponseDTO> getAllWizards();
    WizardResponseDTO getById(UUID id);
    WizardResponseDTO saveWizardWithPages(WizardRequestDTO wizardRequestDTO);
    WizardResponseDTO updateWizardWithPages(UUID wizardId, WizardRequestDTO wizardRequestDTO);
    WizardResponseDTO deleteById(UUID wizardId);
}
