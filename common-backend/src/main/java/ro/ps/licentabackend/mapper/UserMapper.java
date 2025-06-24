package ro.ps.licentabackend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import ro.ps.licentabackend.dto.user.UserRequestDTO;
import ro.ps.licentabackend.dto.user.UserResponseDTO;
import ro.ps.licentabackend.model.UserEntity;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper extends GenericMapper<UserEntity, UserRequestDTO, UserResponseDTO> {
}
