package ro.ps.chefmgmtbackend.service.wizardPage;

import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageResponseDTO;

import java.util.List;
import java.util.UUID;

public interface WizardPageService {

    public List<WizardPageResponseDTO> getAllPagesByWizardId(UUID wizardId);
    public WizardPageResponseDTO saveWizardPage(WizardPageRequestDTO wizardPageRequestDTO);
}
