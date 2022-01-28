package maguire.domain;

import maguire.data.TobeyTypeRepository;
import maguire.models.TobeyType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TobeyTypeService {

    private final TobeyTypeRepository repository;

    public TobeyTypeService(TobeyTypeRepository repository) {
        this.repository = repository;
    }

    public List<TobeyType> findAll() {
        return repository.findAll();
    }
}
