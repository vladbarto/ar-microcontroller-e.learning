package ro.ps.licentabackend.service.user;

import ro.ps.licentabackend.dto.user.UserRequestDTO;
import ro.ps.licentabackend.dto.user.UserResponseDTO;

public interface UserService {

    UserResponseDTO findByEmail(String email);
    UserResponseDTO create(UserRequestDTO userRequestDTO);
}
