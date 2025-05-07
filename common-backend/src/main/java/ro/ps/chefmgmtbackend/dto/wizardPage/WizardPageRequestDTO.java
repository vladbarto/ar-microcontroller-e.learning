package ro.ps.chefmgmtbackend.dto.wizardPage;

import lombok.*;
import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WizardPageRequestDTO {

    private UUID wizardPageId;
    private String target;
    private String description;
    private String action;
    private WizardRequestDTO wizardRequestDTO;
}
