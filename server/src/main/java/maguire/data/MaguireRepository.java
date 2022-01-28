package maguire.data;

import maguire.models.Maguire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaguireRepository extends JpaRepository<Maguire, Integer> {
}
