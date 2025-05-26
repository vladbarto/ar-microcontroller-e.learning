package ro.ps.chefmgmtbackend.service.user;

import ro.ps.chefmgmtbackend.dto.user.UserRequestDTO;
import ro.ps.chefmgmtbackend.dto.user.UserResponseDTO;

public interface UserService {

    UserResponseDTO findByEmail(String email);
    UserResponseDTO create(UserRequestDTO userRequestDTO);
}
