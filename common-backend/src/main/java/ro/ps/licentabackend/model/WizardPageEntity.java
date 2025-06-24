package ro.ps.licentabackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name="WIZARDPAGE")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class WizardPageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID wizardPageId;

    @Column(name = "STEP", nullable = false)
    private int step;

    @Column(name = "TARGET")
    private String target;

    @Column(name = "DESCRIPTION", columnDefinition = "TEXT")
    private String description;

    @Column(name = "ACTION", nullable = false)
    private String action;

    @ManyToOne()
    @JoinColumn(name="WIZARDID", nullable=false)
    private WizardEntity wizard;
}
