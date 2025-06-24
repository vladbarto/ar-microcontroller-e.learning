package ro.ps.licentabackend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ro.ps.licentabackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.licentabackend.dto.wizardPage.WizardPageResponseDTO;
import ro.ps.licentabackend.model.WizardPageEntity;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WizardPageMapper extends GenericMapper <WizardPageEntity, WizardPageRequestDTO, WizardPageResponseDTO> {
}
