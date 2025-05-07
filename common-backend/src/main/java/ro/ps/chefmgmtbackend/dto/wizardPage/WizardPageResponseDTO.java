package ro.ps.chefmgmtbackend.dto.wizardPage;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WizardPageResponseDTO {

    private int step;
    private String target;
    private String description;
    private String action;
}
