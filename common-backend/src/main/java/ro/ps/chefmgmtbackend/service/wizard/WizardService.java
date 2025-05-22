package ro.ps.chefmgmtbackend.service.wizard;

import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;

import java.util.List;
import java.util.UUID;

public interface WizardService {

    List<WizardResponseDTO> getAllWizards();
    WizardResponseDTO saveWizardWithPages(WizardRequestDTO wizardRequestDTO);
    WizardResponseDTO deleteById(UUID wizardId);
}
