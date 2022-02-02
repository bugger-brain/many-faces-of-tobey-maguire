package maguire.data;

import maguire.models.Tobey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TobeyRepository extends JpaRepository<Tobey, Integer> {
}
