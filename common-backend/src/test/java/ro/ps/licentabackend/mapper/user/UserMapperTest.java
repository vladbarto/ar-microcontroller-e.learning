package ro.ps.licentabackend.mapper.user;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.boot.test.context.SpringBootTest;
import ro.ps.licentabackend.dto.user.RoleDTO;
import ro.ps.licentabackend.dto.user.UserRequestDTO;
import ro.ps.licentabackend.mapper.UserMapper;
import ro.ps.licentabackend.model.Role;
import ro.ps.licentabackend.model.UserEntity;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class UserMapperTest {
    private UserMapper underTest;

    @BeforeEach
    public void setUp() {
        underTest = Mappers.getMapper(UserMapper.class);
    }

    @Test
    @DisplayName(value = "Acest test ar trebui sa returneze EGAL cand un request dto este convertit intr-o entitate")
    public void givenValidUserRequestDto_whenMapperCalled_thenReturnValidUserEntity() {
        // given
        final var requestDTO = UserRequestDTO.builder()
                .email("userValid@example.com")
                .password("parola123")
                .role(RoleDTO.USER)
                .build();
        final var expectedResult = UserEntity.builder()
                .email("userValid@example.com")
                .password("parola123")
                .role(Role.USER)
                .build();

        // when
        final var actualResponse = underTest.requestDTOToEntity(requestDTO);

        // then
        assertThat(actualResponse).isEqualTo(expectedResult);
    }
}
