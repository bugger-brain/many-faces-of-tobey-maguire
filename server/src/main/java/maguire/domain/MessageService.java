package maguire.domain;


import maguire.data.MessageRepository;
import maguire.models.Message;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.List;
import java.util.Set;

@Service
public class MessageService {

    private final MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    public List<Message> findAll() {
        return repository.findAll();
    }

    public Result<Message> add(Message message) {
        Result<Message> result = validate(message);
        if (!result.isSuccess()) {
            return result;
        }
        message = repository.save(message);
        result.setPayload(message);
        return result;
    }

    private <T> Result<T> validate(Message message) {
        Result<T> result = new Result<>();
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<Message>> violations = validator.validate(message);

        if (!violations.isEmpty()) {
            for (ConstraintViolation<Message> violation : violations) {
                result.addMessage(violation.getMessage(), ResultStatus.INVALID);
            }
        }
        return result;
    }


}

