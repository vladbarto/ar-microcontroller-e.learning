package ro.ps.chefmgmtbackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RequestMapping("/json/v1")
@RequiredArgsConstructor
public class JsonController {
    @PostMapping("/save")
    public void saveJson(@RequestBody String requestBody) {
        log.info("Received over network: {}", requestBody);
    }
//    public ResponseEntity<UserResponseDTO> saveJson() {
//        return new ResponseEntity<>(
//                userService.findByEmail(email),
//                HttpStatus.OK
//        );
//    }
}
