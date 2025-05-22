package ro.ps.chefmgmtbackend.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import ro.ps.chefmgmtbackend.dto.user.RoleDTO;
import ro.ps.chefmgmtbackend.dto.user.UserResponseDTO;
import ro.ps.chefmgmtbackend.model.Role;
import ro.ps.chefmgmtbackend.model.UserEntity;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-05-21T23:54:44+0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponseDTO userEntityToUserResponseDTO(UserEntity userEntity) {
        if ( userEntity == null ) {
            return null;
        }

        UserResponseDTO userResponseDTO = new UserResponseDTO();

        userResponseDTO.setId( userEntity.getId() );
        userResponseDTO.setEmail( userEntity.getEmail() );
        userResponseDTO.setRole( roleToRoleDTO( userEntity.getRole() ) );

        return userResponseDTO;
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
}
