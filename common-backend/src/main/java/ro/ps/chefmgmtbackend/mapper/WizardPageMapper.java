package ro.ps.chefmgmtbackend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageResponseDTO;
import ro.ps.chefmgmtbackend.model.WizardPageEntity;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WizardPageMapper extends GenericMapper <WizardPageEntity, WizardPageRequestDTO, WizardPageResponseDTO> {
}
