package ro.ps.chefmgmtbackend.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ro.ps.chefmgmtbackend.dto.user.RoleDTO;
import ro.ps.chefmgmtbackend.dto.user.UserRequestDTO;
import ro.ps.chefmgmtbackend.dto.user.UserResponseDTO;
import ro.ps.chefmgmtbackend.model.Role;
import ro.ps.chefmgmtbackend.model.UserEntity;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-06-19T17:48:04+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponseDTO entityToResponseDTO(UserEntity entity) {
        if ( entity == null ) {
            return null;
        }

        UserResponseDTO userResponseDTO = new UserResponseDTO();

        userResponseDTO.setId( entity.getId() );
        userResponseDTO.setEmail( entity.getEmail() );
        userResponseDTO.setRole( roleToRoleDTO( entity.getRole() ) );

        return userResponseDTO;
    }

    @Override
    public List<UserResponseDTO> entityListToResponseDTOList(List<UserEntity> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<UserResponseDTO> list = new ArrayList<UserResponseDTO>( entityList.size() );
        for ( UserEntity userEntity : entityList ) {
            list.add( entityToResponseDTO( userEntity ) );
        }

        return list;
    }

    @Override
    public UserEntity requestDTOToEntity(UserRequestDTO requestDTO) {
        if ( requestDTO == null ) {
            return null;
        }

        UserEntity.UserEntityBuilder userEntity = UserEntity.builder();

        userEntity.email( requestDTO.getEmail() );
        userEntity.password( requestDTO.getPassword() );
        userEntity.role( roleDTOToRole( requestDTO.getRole() ) );

        return userEntity.build();
    }

    protected RoleDTO roleToRoleDTO(Role role) {
        if ( role == null ) {
            return null;
        }

        RoleDTO roleDTO;

        switch ( role ) {
            case USER: roleDTO = RoleDTO.USER;
            break;
            case ADMIN: roleDTO = RoleDTO.ADMIN;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + role );
        }

        return roleDTO;
    }

    protected Role roleDTOToRole(RoleDTO roleDTO) {
        if ( roleDTO == null ) {
            return null;
        }

        Role role;

        switch ( roleDTO ) {
            case USER: role = Role.USER;
            break;
            case ADMIN: role = Role.ADMIN;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + roleDTO );
        }

        return role;
    }
}
