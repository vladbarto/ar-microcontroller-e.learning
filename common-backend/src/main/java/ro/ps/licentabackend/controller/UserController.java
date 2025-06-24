package ro.ps.licentabackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ro.ps.licentabackend.dto.user.UserRequestDTO;
import ro.ps.licentabackend.dto.user.UserResponseDTO;
import ro.ps.licentabackend.service.user.UserService;

@Slf4j
@RestController
@RequestMapping("/user/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/info")
    public ResponseEntity<UserResponseDTO> getLoggedUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) authentication.getPrincipal();

        return new ResponseEntity<>(
                userService.findByEmail(email),
                HttpStatus.OK
        );
    }

    @PostMapping("/registration")
    public ResponseEntity<UserResponseDTO> register(@RequestBody UserRequestDTO userRequestDTO) {
        log.info("Registering new user");

        return new ResponseEntity<>(
                userService.create(userRequestDTO),
                HttpStatus.CREATED
        );
    }
}
