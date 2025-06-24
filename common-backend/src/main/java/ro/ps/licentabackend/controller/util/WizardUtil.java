package ro.ps.licentabackend.controller.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.experimental.UtilityClass;
import lombok.extern.slf4j.Slf4j;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@UtilityClass
public class WizardUtil {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public static WizardRequestDTO requestBodyStringToRequestDTO(String requestBody) {
        try {
            WizardRequestDTO requestBodyDTO = objectMapper.readValue(requestBody, WizardRequestDTO.class);
            log.info("Wizard deserialized successfully: {}", objectMapper.writeValueAsString(requestBodyDTO));

            return requestBodyDTO;
        } catch (Exception e) {
            log.error("Error during deserialization: {}", e.getMessage());
            return null;
        }
    }

    public static List<Object> wizardDtoToObject(String requestBody) {
        try {
            WizardRequestDTO requestBodyDTO = objectMapper.readValue(requestBody, WizardRequestDTO.class);
            log.info("Wizard deserialized successfully: {}", objectMapper.writeValueAsString(requestBodyDTO));

            WizardRequestDTO wizardRequestDTO = WizardRequestDTO.builder()
                    .aim(requestBodyDTO.getAim())
                    .subtitle(requestBodyDTO.getSubtitle())
                    .build();

            List<WizardPageRequestDTO> wizardPages = wizardMapToList(requestBodyDTO.getPages(), wizardRequestDTO);

            return List.of(wizardRequestDTO, wizardPages);
        } catch (Exception e) {
            log.error("Error during deserialization: {}", e.getMessage());
            return null;
        }
    }


    private static List<WizardPageRequestDTO> wizardMapToList(Map<String, WizardPageRequestDTO> pages, WizardRequestDTO wizard) {
        if (pages == null || pages.isEmpty()) {
            return Collections.emptyList();
        }

        return pages.values().stream().map(page -> WizardPageRequestDTO.builder()
                        .wizardPageId(page.getWizardPageId())
                        .target(page.getTarget())
                        .description(page.getDescription())
                        .action(page.getAction())
                        .wizardRequestDTO(wizard) // Ensure each page references the wizard
                        .build())
                .collect(Collectors.toList());
    }

}
