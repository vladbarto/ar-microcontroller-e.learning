package ro.ps.chefmgmtbackend.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ro.ps.chefmgmtbackend.dto.chef.ChefRequestDTO;
import ro.ps.chefmgmtbackend.dto.chef.ChefResponseDTO;
import ro.ps.chefmgmtbackend.model.ChefEntity;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-26T13:09:01+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class ChefMapperImpl implements ChefMapper {

    @Override
    public ChefResponseDTO chefEntityToChefResponseDTO(ChefEntity chefEntity) {
        if ( chefEntity == null ) {
            return null;
        }

        ChefResponseDTO chefResponseDTO = new ChefResponseDTO();

        chefResponseDTO.setNumberOfStars( chefEntity.getRating() );
        chefResponseDTO.setId( chefEntity.getId() );
        chefResponseDTO.setName( chefEntity.getName() );

        return chefResponseDTO;
    }

    @Override
    public List<ChefResponseDTO> chefEntityListToChefResponseDTOList(List<ChefEntity> chefEntityList) {
        if ( chefEntityList == null ) {
            return null;
        }

        List<ChefResponseDTO> list = new ArrayList<ChefResponseDTO>( chefEntityList.size() );
        for ( ChefEntity chefEntity : chefEntityList ) {
            list.add( chefEntityToChefResponseDTO( chefEntity ) );
        }

        return list;
    }

    @Override
    public ChefEntity chefRequestDTOToChefEntity(ChefRequestDTO chefRequestDTO) {
        if ( chefRequestDTO == null ) {
            return null;
        }

        ChefEntity chefEntity = new ChefEntity();

        chefEntity.setName( chefRequestDTO.getName() );
        chefEntity.setRating( chefRequestDTO.getRating() );

        return chefEntity;
    }
}
