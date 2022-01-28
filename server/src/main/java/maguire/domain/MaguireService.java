package maguire.domain;

import maguire.data.MaguireRepository;
import maguire.models.Maguire;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaguireService {

    private final MaguireRepository repository;

    public MaguireService(MaguireRepository repository) {
        this.repository = repository;
    }

    public List<Maguire> findAll() {
        return repository.findAll();
    }

    public Maguire findById(int maguireId) {
        return repository.findById(maguireId).orElse(null);
    }

//    public Result<Maguire> add(Maguire maguire) {
//    }


}
