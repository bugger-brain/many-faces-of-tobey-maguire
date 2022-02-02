package maguire.domain;

import maguire.data.TobeyRepository;
import maguire.models.Tobey;
import org.springframework.stereotype.Service;

import javax.validation.*;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class TobeyService {

    private final TobeyRepository repository;

    public TobeyService(TobeyRepository repository) {
        this.repository = repository;
    }

    public List<Tobey> findAll() {
        return repository.findAll();
    }

    public Tobey findById(int maguireId) {
        return repository.findById(maguireId).orElse(null);
    }

    public Result<Tobey> add(Tobey tobey) {
        Result<Tobey> result = validate(tobey);
        if (!result.isSuccess()) {
            return result;
        }
        tobey = repository.save(tobey);
        result.setPayload(tobey);
        return result;
    }

    public Result<Void> update(Tobey tobey) {
        Result<Void> result = validate(tobey);
        if (!result.isSuccess()) {
            return result;
        }

        if (findById(tobey.getTobeyId()) != null) {
            repository.save(tobey);
            return result;
        }
        result.addMessage("Tobey Id " + tobey.getTobeyId() + " not found.", ResultStatus.NOT_FOUND);
        return result;
    }

    public boolean deleteById(int tobeyId) {
        if (findById(tobeyId) != null) {
            repository.deleteById(tobeyId);
            return true;
        }
        return false;
    }

    private <T> Result<T> validate(Tobey tobey) {
        Result<T> result = new Result<>();
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<Tobey>> violations = validator.validate(tobey);

        if (!violations.isEmpty()) {
            for (ConstraintViolation<Tobey> violation : violations) {
                result.addMessage(violation.getMessage(), ResultStatus.INVALID);
            }
        }
        return result;
    }

    public List<Tobey> findByTagId(int tagId) {
        return repository.findAll()
                .stream().filter(m -> {
                    return m.getTags().stream().anyMatch(t -> t.getTagId() == tagId);
                }).collect(Collectors.toList());
    }
}
