package ro.ps.chefmgmtbackend.service.wizardPage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageResponseDTO;
import ro.ps.chefmgmtbackend.mapper.WizardPageMapper;
import ro.ps.chefmgmtbackend.repository.WizardPageRepository;
import ro.ps.chefmgmtbackend.model.WizardPageEntity;

import java.util.List;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
public class WizardPageServiceBean implements WizardPageService {

    private final WizardPageRepository wizardPageRepository;
    private final WizardPageMapper wizardPageMapper;
    private final String applicationName;

    @Override
    public List<WizardPageResponseDTO> getAllPagesByWizardId(UUID wizardId) {
        log.info("Get all pages by wizardId: {} for application {}", wizardId, applicationName);

//        List<WizardPageEntity> pages = wizardPageRepository.findByWizardId(wizardId);
        return null;
    }

    @Override
    @Transactional
    public WizardPageResponseDTO saveWizardPage(WizardPageRequestDTO wizardPageRequestDTO) {
        log.info("Saving wizard page {} for application {}", wizardPageRequestDTO, applicationName);

        WizardPageEntity wizardPageToBeAdded = wizardPageMapper.requestDTOToEntity(wizardPageRequestDTO);
        WizardPageEntity wizardPageAdded = wizardPageRepository.save(wizardPageToBeAdded);

        return wizardPageMapper.entityToResponseDTO(wizardPageAdded);
    }
}
