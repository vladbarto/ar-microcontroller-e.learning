package ro.ps.chefmgmtbackend.dto.wizard;

import lombok.*;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageResponseDTO;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WizardResponseDTO {

    private UUID wizardId;
    private String subtitle;
    private String aim;
    private List<WizardPageResponseDTO> pages;
}
