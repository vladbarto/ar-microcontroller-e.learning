package ro.ps.licentabackend.dto.user;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRequestDTO {

    private String email;
    private String password;
    private RoleDTO role;
}
