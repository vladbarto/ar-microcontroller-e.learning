package ro.ps.licentabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ro.ps.licentabackend.model.WizardEntity;

import java.util.List;
import java.util.UUID;

public interface WizardRepository extends JpaRepository<WizardEntity, UUID> {

    @Query("SELECT w FROM WizardEntity w LEFT JOIN FETCH w.steps")
    List<WizardEntity> findAllWithPages();
}
