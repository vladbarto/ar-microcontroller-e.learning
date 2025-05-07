package ro.ps.chefmgmtbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.ps.chefmgmtbackend.model.WizardPageEntity;

import java.util.UUID;

public interface WizardPageRepository extends JpaRepository<WizardPageEntity, UUID> {
}
