package ro.ps.chefmgmtbackend.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageRequestDTO;
import ro.ps.chefmgmtbackend.dto.wizardPage.WizardPageResponseDTO;
import ro.ps.chefmgmtbackend.model.WizardPageEntity;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-05-28T18:52:08+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class WizardPageMapperImpl implements WizardPageMapper {

    @Override
    public WizardPageResponseDTO entityToResponseDTO(WizardPageEntity entity) {
        if ( entity == null ) {
            return null;
        }

        WizardPageResponseDTO.WizardPageResponseDTOBuilder wizardPageResponseDTO = WizardPageResponseDTO.builder();

        wizardPageResponseDTO.step( entity.getStep() );
        wizardPageResponseDTO.target( entity.getTarget() );
        wizardPageResponseDTO.description( entity.getDescription() );
        wizardPageResponseDTO.action( entity.getAction() );

        return wizardPageResponseDTO.build();
    }

    @Override
    public List<WizardPageResponseDTO> entityListToResponseDTOList(List<WizardPageEntity> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<WizardPageResponseDTO> list = new ArrayList<WizardPageResponseDTO>( entityList.size() );
        for ( WizardPageEntity wizardPageEntity : entityList ) {
            list.add( entityToResponseDTO( wizardPageEntity ) );
        }

        return list;
    }

    @Override
    public WizardPageEntity requestDTOToEntity(WizardPageRequestDTO requestDTO) {
        if ( requestDTO == null ) {
            return null;
        }

        WizardPageEntity.WizardPageEntityBuilder wizardPageEntity = WizardPageEntity.builder();

        wizardPageEntity.wizardPageId( requestDTO.getWizardPageId() );
        wizardPageEntity.target( requestDTO.getTarget() );
        wizardPageEntity.description( requestDTO.getDescription() );
        wizardPageEntity.action( requestDTO.getAction() );

        return wizardPageEntity.build();
    }
}
