package maguire.data;

import maguire.models.TobeyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TobeyTypeRepository extends JpaRepository<TobeyType, Integer> {
}
