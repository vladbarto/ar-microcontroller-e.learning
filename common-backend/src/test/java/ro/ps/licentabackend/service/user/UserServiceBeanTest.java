package ro.ps.licentabackend.service.user;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import ro.ps.licentabackend.dto.auth.LoginRequestDTO;
import ro.ps.licentabackend.mapper.UserMapper;
import ro.ps.licentabackend.model.Role;
import ro.ps.licentabackend.model.UserEntity;
import ro.ps.licentabackend.repository.UserRepository;

import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserServiceBeanTest {

    private UserServiceBean serviceUnderTest;
    private static UUID USER_ID = UUID.randomUUID();

    @Mock private UserRepository userRepositoryMock;
    @Mock private UserMapper userMapperMock;
    @Mock private PasswordEncoder passwordEncoderMock;

    @BeforeEach
    void setUp() {
        this.serviceUnderTest = new UserServiceBean(
                userRepositoryMock,
                userMapperMock,
                passwordEncoderMock
        );
    }

    @Test
    void givenRegisterData_whenRegiterCalled_thenReturnUserResponseDTO() {

    }

    /***
     * Helper functions ------------------------------------------------------------------------------------------------
     */

    private UserEntity getUserEntity() {
        return UserEntity.builder()
                .id(USER_ID)
                .email("vasilevictimescu@licenta.ro")
                .role(Role.USER)
                .build();
    }

    private LoginRequestDTO getLoginRequestDTO() {
        return LoginRequestDTO.builder()
                .email("vasilevictimescu@licenta.ro")
                .password("parola123")
                .build();
    }

//    private LoginResponseDTO getLoginResponseDTO() {
//        return LoginResponseDTO.builder()
//                .userId(USER_ID)
//                .email("vasilevictimescu@licenta.ro")
//                .role(Role.USER)
//                .build();
//    }
}
