package ro.ps.licentabackend.service.wizardPage;

import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.licentabackend.dto.wizardPage.WizardPageResponseDTO;

import java.util.List;
import java.util.UUID;

public interface WizardPageService {

    public List<WizardPageResponseDTO> getAllPagesByWizardId(UUID wizardId);
    public WizardPageResponseDTO saveWizardPage(WizardPageRequestDTO wizardPageRequestDTO);
}
