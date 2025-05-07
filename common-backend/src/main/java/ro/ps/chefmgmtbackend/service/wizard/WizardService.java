package ro.ps.chefmgmtbackend.service.wizard;

import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;

import java.util.List;

public interface WizardService {

    public List<WizardResponseDTO> getAllWizards();
    public WizardResponseDTO saveWizardWithPages(WizardRequestDTO wizardRequestDTO);
}
