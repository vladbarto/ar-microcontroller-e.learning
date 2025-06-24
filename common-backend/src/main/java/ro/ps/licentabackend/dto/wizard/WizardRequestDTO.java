package ro.ps.licentabackend.dto.wizard;

import lombok.*;
import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WizardRequestDTO {

    private String subtitle;
    private String aim;
    private Map<String, WizardPageRequestDTO> pages; // Keys are "1", "2", etc.
}
