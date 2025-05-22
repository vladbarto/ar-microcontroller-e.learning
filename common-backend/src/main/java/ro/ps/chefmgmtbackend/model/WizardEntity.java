package ro.ps.chefmgmtbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name="WIZARD")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class WizardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID wizardId;

    @OneToMany(mappedBy = "wizard", cascade = CascadeType.ALL, fetch = FetchType.EAGER)//, orphanRemoval = true)
    private List<WizardPageEntity> steps;

    @Column(name = "SUBTITLE", nullable = false, columnDefinition = "TEXT")
    private String subtitle;

    @Column(name = "AIM", nullable = false, columnDefinition = "TEXT")
    private String aim;
}

//    @ManyToOne()
//    @JoinColumn(name="LEARNINGMODULEID", nullable=true)
//    private LearningModuleEntity learningModuleId;
