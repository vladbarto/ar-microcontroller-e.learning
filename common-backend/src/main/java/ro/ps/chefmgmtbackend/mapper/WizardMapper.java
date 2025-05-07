package ro.ps.chefmgmtbackend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;
import ro.ps.chefmgmtbackend.dto.wizard.WizardRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizard.WizardResponseDTO;
import ro.ps.chefmgmtbackend.model.WizardEntity;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = { WizardPageMapper.class })
public interface WizardMapper extends GenericMapper<WizardEntity, WizardRequestDTO, WizardResponseDTO> {

    @Override
    @Mapping(source = "steps", target = "pages")  // Explicit mapping for steps -> pages
    WizardResponseDTO entityToResponseDTO(WizardEntity entity);
}
