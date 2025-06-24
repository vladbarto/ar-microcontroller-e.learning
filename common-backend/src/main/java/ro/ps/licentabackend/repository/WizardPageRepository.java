package ro.ps.licentabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.ps.licentabackend.model.WizardPageEntity;

import java.util.UUID;

public interface WizardPageRepository extends JpaRepository<WizardPageEntity, UUID> {
}
