package ro.ps.chefmgmtbackend.dto.wizard;

import lombok.*;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;

import java.util.Map;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WizardRequestDTO {

    private UUID wizardId;
    private String subtitle;
    private String aim;
    private Map<String, WizardPageRequestDTO> pages; // Keys are "1", "2", etc.
}
