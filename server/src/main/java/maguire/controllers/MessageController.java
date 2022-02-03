package maguire.controllers;

import maguire.domain.MessageService;
import maguire.domain.Result;
import maguire.domain.ResultStatus;
import maguire.models.Message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/leaveamessage")
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService){
        this.messageService = messageService;
    }

    @GetMapping
    public List<Message> getMessages() {
        List<Message> messages = messageService.findAll();
       return messages;
    }

    @PostMapping
    public ResponseEntity<Object> post(@RequestBody @Valid Message message,
                                       BindingResult bindingResult,
                                       ServletRequest request) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Message> result = messageService.add(message);
        if (result.isSuccess()) {

            String url = String.format("http://%s:%s/api/leaveamessage/%s",
                    request.getServerName(),
                    request.getServerPort(),
                    message.getMessageId());

            return ResponseEntity.created(URI.create(url))
                    .body(message);
        }
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    private Result<Void> makeResult(BindingResult bindingResult) {
        Result<Void> result = new Result<>();
        for (ObjectError err : bindingResult.getAllErrors()) {
            result.addMessage(err.getDefaultMessage(), ResultStatus.INVALID);
        }
        return result;
    }
}
