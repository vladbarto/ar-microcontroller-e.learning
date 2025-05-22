package ro.ps.chefmgmtbackend.service.wizard;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.chefmgmtbackend.mapper.WizardMapper;
import ro.ps.chefmgmtbackend.model.WizardEntity;
import ro.ps.chefmgmtbackend.model.WizardPageEntity;
import ro.ps.chefmgmtbackend.repository.WizardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Slf4j
@RequiredArgsConstructor
public class WizardServiceBean implements WizardService {

    private final WizardRepository wizardRepository;
    private final WizardMapper wizardMapper;
    private final String applicationName;

    @Override
    public List<WizardResponseDTO> getAllWizards() {
        log.info("Retrieving all wizards");

        List<WizardEntity> wizardEntities = wizardRepository.findAllWithPages();
        return wizardMapper.entityListToResponseDTOList(wizardEntities);
    }

    @Override
    @Transactional
    public WizardResponseDTO saveWizardWithPages(WizardRequestDTO wizardRequestDTO) {
        log.info("Saving wizard with pages: {} for application {}", wizardRequestDTO, applicationName);

        WizardEntity wizardToBeAdded = wizardMapper.requestDTOToEntity(wizardRequestDTO);

        // For each page, establish the bidirectional relationship
        if (wizardRequestDTO.getPages() != null) {
            List<WizardPageEntity> pages = new ArrayList<>();

            wizardRequestDTO.getPages().entrySet().stream()
                            .forEach((entry -> {
                                WizardPageRequestDTO pageDTO = entry.getValue();
                                WizardPageEntity pageEntity = WizardPageEntity.builder()
                                        .target(pageDTO.getTarget())
                                        .description(pageDTO.getDescription())
                                        .action(pageDTO.getAction())
                                        .step(Integer.parseInt(entry.getKey()))
                                        .wizard(wizardToBeAdded) // Set the parent reference
                                        .build();
                                pages.add(pageEntity);
                            }));

            wizardToBeAdded.setSteps(pages);
        }

        // Save the wizard entity, which will cascade to pages
        WizardEntity wizardAdded = wizardRepository.save(wizardToBeAdded);

        return wizardMapper.entityToResponseDTO(wizardAdded);
    }

    @Override
    @Transactional
    public WizardResponseDTO deleteById(UUID wizardId) {
        log.info("Deleting wizard with id: {}", wizardId);

        wizardRepository.deleteById(wizardId);
        return null;
    }
}
