package ro.ps.licentabackend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;
import ro.ps.licentabackend.model.WizardEntity;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = { WizardPageMapper.class })
public interface WizardMapper extends GenericMapper<WizardEntity, WizardRequestDTO, WizardResponseDTO> {

    @Override
    @Mapping(source = "steps", target = "pages")  // Explicit mapping for steps -> pages
    WizardResponseDTO entityToResponseDTO(WizardEntity entity);
}
