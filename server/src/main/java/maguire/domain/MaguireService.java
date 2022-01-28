package maguire.domain;

import maguire.data.MaguireRepository;
import maguire.models.Maguire;
import org.springframework.stereotype.Service;

import javax.validation.*;
import java.util.List;
import java.util.Set;

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

    public Result<Maguire> add(Maguire maguire) {
        Result<Maguire> result = validate(maguire);
        if (!result.isSuccess()) {
            return result;
        }
        maguire = repository.save(maguire);
        result.setPayload(maguire);
        return result;
    }

    public Result<Void> update(Maguire maguire) {
        Result<Void> result = validate(maguire);
        if (!result.isSuccess()) {
            return result;
        }

        if (findById(maguire.getMaguireId()) != null) {
            repository.save(maguire);
            return result;
        }
        result.addMessage("Maguire Id " + maguire.getMaguireId() + " not found.", ResultStatus.NOT_FOUND);
        return result;
    }

    public boolean deleteById(int maguireId) {
        if (findById(maguireId) != null) {
            repository.deleteById(maguireId);
            return true;
        }
        return false;
    }

    private <T> Result<T> validate(Maguire maguire) {
        Result<T> result = new Result<>();
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<Maguire>> violations = validator.validate(maguire);

        if (!violations.isEmpty()) {
            for (ConstraintViolation<Maguire> violation : violations) {
                result.addMessage(violation.getMessage(), ResultStatus.INVALID);
            }
        }
        return result;
    }
}
