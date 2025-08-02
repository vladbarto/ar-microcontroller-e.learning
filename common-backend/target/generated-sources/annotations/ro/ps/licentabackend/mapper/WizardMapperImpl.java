package ro.ps.licentabackend.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ro.ps.licentabackend.dto.wizard.WizardRequestDTO;
import ro.ps.licentabackend.dto.wizard.WizardResponseDTO;
import ro.ps.licentabackend.model.WizardEntity;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-07-15T21:38:24+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Homebrew)"
)
@Component
public class WizardMapperImpl implements WizardMapper {

    @Autowired
    private WizardPageMapper wizardPageMapper;

    @Override
    public List<WizardResponseDTO> entityListToResponseDTOList(List<WizardEntity> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<WizardResponseDTO> list = new ArrayList<WizardResponseDTO>( entityList.size() );
        for ( WizardEntity wizardEntity : entityList ) {
            list.add( entityToResponseDTO( wizardEntity ) );
        }

        return list;
    }

    @Override
    public WizardEntity requestDTOToEntity(WizardRequestDTO requestDTO) {
        if ( requestDTO == null ) {
            return null;
        }

        WizardEntity.WizardEntityBuilder wizardEntity = WizardEntity.builder();

        wizardEntity.subtitle( requestDTO.getSubtitle() );
        wizardEntity.aim( requestDTO.getAim() );

        return wizardEntity.build();
    }

    @Override
    public WizardResponseDTO entityToResponseDTO(WizardEntity entity) {
        if ( entity == null ) {
            return null;
        }

        WizardResponseDTO.WizardResponseDTOBuilder wizardResponseDTO = WizardResponseDTO.builder();

        wizardResponseDTO.pages( wizardPageMapper.entityListToResponseDTOList( entity.getSteps() ) );
        wizardResponseDTO.wizardId( entity.getWizardId() );
        wizardResponseDTO.subtitle( entity.getSubtitle() );
        wizardResponseDTO.aim( entity.getAim() );

        return wizardResponseDTO.build();
    }
}
