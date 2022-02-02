package maguire.controllers;

import maguire.domain.TobeyService;
import maguire.domain.Result;
import maguire.domain.ResultStatus;
import maguire.domain.TagService;
import maguire.models.Tobey;
import maguire.models.Tag;
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
//@CrossOrigin(origins = {"http://localhost:3000","http://127.0.0.1:8080"})
@RequestMapping("/api/tobey")
public class TobeyController {

    private final TobeyService tobeyService;
    private final TagService tagService;

    public TobeyController(TobeyService tobeyService, TagService tagService) {
        this.tobeyService = tobeyService;
        this.tagService = tagService;
    }

    @GetMapping
    public List<Tobey> getTobeys() {
        List<Tobey> tobeys = tobeyService.findAll();
        return tobeys;
    }

    @GetMapping("/tag/{tagId}")
    public List<Tobey> getTagsByTobeyId(@PathVariable int tagId) {
        List<Tobey> tobeys = tobeyService.findByTagId(tagId);
        return tobeys;
    }

    @GetMapping("/{tobeyId}")
    public ResponseEntity<Tobey> getTobey(@PathVariable int tobeyId) {
        Tobey tobey = tobeyService.findById(tobeyId);
        if (tobey == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tobey);
    }

    @PostMapping
    public ResponseEntity<Object> post(@RequestBody @Valid Tobey tobey,
                                       BindingResult bindingResult,
                                       ServletRequest request) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Tobey> result = tobeyService.add(tobey);
        if (result.isSuccess()) {

            String url = String.format("http://%s:%s/api/tobey/%s",
                    request.getServerName(),
                    request.getServerPort(),
                    tobey.getTobeyId());

            return ResponseEntity.created(URI.create(url))
                    .body(tobey);
        }
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{tobeyId}")
    public ResponseEntity<Object> put(@PathVariable int tobeyId,
                                      @RequestBody @Valid Tobey tobey,
                                      BindingResult bindingResult) {

        if (tobey == null || tobey.getTobeyId() != tobeyId) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Void> result = tobeyService.update(tobey);
        switch (result.getStatus()) {
            case SUCCESS:
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            case NOT_FOUND:
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            default:
                return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{tobeyId}")
    public ResponseEntity<Void> delete(@PathVariable int tobeyId) {
        boolean success = tobeyService.deleteById(tobeyId);
        if (success) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/tags")
    public List<Tag> getTobeyTypes() {
        List<Tag> tags = tagService.findAll();
        return tags;
    }

    private Result<Void> makeResult(BindingResult bindingResult) {
        Result<Void> result = new Result<>();
        for (ObjectError err : bindingResult.getAllErrors()) {
            result.addMessage(err.getDefaultMessage(), ResultStatus.INVALID);
        }
        return result;
    }
}


