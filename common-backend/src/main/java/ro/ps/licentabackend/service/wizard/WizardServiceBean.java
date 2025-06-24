package ro.ps.licentabackend.service.wizard;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;
import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.licentabackend.mapper.WizardMapper;
import ro.ps.licentabackend.model.WizardEntity;
import ro.ps.licentabackend.model.WizardPageEntity;
import ro.ps.licentabackend.repository.WizardRepository;

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
    public WizardResponseDTO getById(UUID id) {
        log.info("Retrieving wizard with id {}", id);

        return wizardMapper.entityToResponseDTO(wizardRepository.findById(id).orElse(null));
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
    public WizardResponseDTO updateWizardWithPages(UUID wizardId, WizardRequestDTO wizardRequestDTO) {
        log.info("Updating wizard {} with new steps", wizardId);

        WizardEntity wizard = wizardRepository.findById(wizardId)
                .orElseThrow(() -> new IllegalArgumentException("Wizard not found: " + wizardId));

        wizard.setSubtitle(wizardRequestDTO.getSubtitle());
        wizard.setAim(wizardRequestDTO.getAim());

        // Remove all old steps
        wizard.getSteps().clear(); // Works with orphanRemoval = true

        // Recreate and set new steps
        List<WizardPageEntity> newSteps = wizardRequestDTO.getPages().entrySet().stream()
                .map(entry -> {
                    String key = entry.getKey();
                    WizardPageRequestDTO dto = entry.getValue();
                    return WizardPageEntity.builder()
                            .step(Integer.parseInt(key))
                            .target(dto.getTarget())
                            .description(dto.getDescription())
                            .action(dto.getAction())
                            .wizard(wizard)
                            .build();
                })
                .toList();

        wizard.getSteps().addAll(newSteps);

        WizardEntity saved = wizardRepository.save(wizard);
        return wizardMapper.entityToResponseDTO(saved);
    }


    @Override
    @Transactional
    public WizardResponseDTO deleteById(UUID wizardId) {
        log.info("Deleting wizard with id: {}", wizardId);

        wizardRepository.deleteById(wizardId);
        return null;
    }
}
