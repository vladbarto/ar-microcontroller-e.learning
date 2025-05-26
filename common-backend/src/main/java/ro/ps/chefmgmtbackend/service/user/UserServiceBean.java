package ro.ps.chefmgmtbackend.service.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import ro.ps.chefmgmtbackend.dto.user.UserRequestDTO;
import ro.ps.chefmgmtbackend.dto.user.UserResponseDTO;
import ro.ps.chefmgmtbackend.exception.ExceptionCode;
import ro.ps.chefmgmtbackend.exception.NotFoundException;
import ro.ps.chefmgmtbackend.mapper.UserMapper;
import ro.ps.chefmgmtbackend.model.Role;
import ro.ps.chefmgmtbackend.model.UserEntity;
import ro.ps.chefmgmtbackend.repository.UserRepository;

@Slf4j
@RequiredArgsConstructor
public class UserServiceBean implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDTO findByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(userMapper::entityToResponseDTO)
                .orElseThrow(() -> new NotFoundException(String.format(
                        ExceptionCode.ERR002_EMAIL_NOT_FOUND.getMessage(),
                        email
                )));
    }

    @Override
    public UserResponseDTO create(UserRequestDTO userRequestDTO) {
        log.info("Creating user: {}", userRequestDTO);

        return userMapper.entityToResponseDTO(
                userRepository.save(
                        UserEntity.builder()
                                .email(userRequestDTO.getEmail())
                                .password(passwordEncoder.encode(userRequestDTO.getPassword()))
                                .role(userRequestDTO.getRole().toString().equals("USER")? Role.USER:Role.ADMIN)
                                .build()
                )
        );
    }
}
