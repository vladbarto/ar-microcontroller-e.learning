package ro.ps.licentabackend.controller.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.reactive.server.WebTestClient;
import ro.ps.licentabackend.dto.auth.LoginRequestDTO;
import ro.ps.licentabackend.security.util.SecurityConstants;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class LoginFilterIT {

    @LocalServerPort
    private int port;

    @Autowired
    private ObjectMapper objectMapper;

    private WebTestClient webTestClient;

    @BeforeEach
    public void setUp() {
        webTestClient = WebTestClient
                .bindToServer()
                .baseUrl("http://localhost:" + port + "/api"
                        + SecurityConstants.LOGIN_URL)
                .build();
    }

    @Test
    @DisplayName("Login cu credențiale valide returnează cookie JWT")
    void givenValidCredentials_whenLogin_thenReturnJwtCookie() throws Exception {
        // given
        LoginRequestDTO requestDTO = LoginRequestDTO.builder()
                .email("vlad@mail.vlad.ro")
                .password("vlad")
                .build();

        // when & then
        webTestClient.post()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .bodyValue(objectMapper.writeValueAsString(requestDTO))
                .exchange()
                .expectStatus().isEqualTo(OK)
                .expectCookie().exists(SecurityConstants.JWT_TOKEN);
    }

    @Test
    @DisplayName("Login cu date greșite returnează 401 Unauthorized")
    void givenInvalidCredentials_whenLogin_thenUnauthorized() throws Exception {
        // given
        LoginRequestDTO requestDTO = LoginRequestDTO.builder()
                .email("wrong@example.com")
                .password("wrongpass")
                .build();

        // when & then
        webTestClient.post()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .bodyValue(objectMapper.writeValueAsString(requestDTO))
                .exchange()
                .expectStatus().isEqualTo(UNAUTHORIZED);
    }
}
