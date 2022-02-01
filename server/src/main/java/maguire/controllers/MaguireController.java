package maguire.controllers;

import maguire.domain.MaguireService;
import maguire.domain.Result;
import maguire.domain.ResultStatus;
import maguire.domain.TobeyTypeService;
import maguire.models.Maguire;
import maguire.models.TobeyType;
import org.springframework.beans.factory.annotation.Value;
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
@RequestMapping("/api/maguire")
public class MaguireController {

    private final MaguireService maguireService;
    private final TobeyTypeService tobeyTypeService;

    public MaguireController(MaguireService maguireService, TobeyTypeService tobeyTypeService) {
        this.maguireService = maguireService;
        this.tobeyTypeService = tobeyTypeService;
    }

    @GetMapping
    public List<Maguire> getMaguires() {
        List<Maguire> maguires = maguireService.findAll();
        return maguires;
    }

    @GetMapping("/tobey/{tobeyTypeId}")
    public List<Maguire> getMaguiresByTobeyTypeId(@PathVariable int tobeyTypeId) {
        List<Maguire> maguires = maguireService.findByTobeyTypeId(tobeyTypeId);
        return maguires;
    }

    @GetMapping("/{maguireId}")
    public ResponseEntity<Maguire> getMaguire(@PathVariable int maguireId) {
        Maguire maguire = maguireService.findById(maguireId);
        if (maguire == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(maguire);
    }

    @PostMapping
    public ResponseEntity<Object> post(@RequestBody @Valid Maguire maguire,
                                       BindingResult bindingResult,
                                       ServletRequest request) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Maguire> result = maguireService.add(maguire);
        if (result.isSuccess()) {

            String url = String.format("http://%s:%s/api/maguire/%s",
                    request.getServerName(),
                    request.getServerPort(),
                    maguire.getMaguireId());

            return ResponseEntity.created(URI.create(url))
                    .body(maguire);
        }
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{maguireId}")
    public ResponseEntity<Object> put(@PathVariable int maguireId,
                                      @RequestBody @Valid Maguire maguire,
                                      BindingResult bindingResult) {

        if (maguire == null || maguire.getMaguireId() != maguireId) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Void> result = maguireService.update(maguire);
        switch (result.getStatus()) {
            case SUCCESS:
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            case NOT_FOUND:
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            default:
                return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{maguireId}")
    public ResponseEntity<Void> delete(@PathVariable int maguireId) {
        boolean success = maguireService.deleteById(maguireId);
        if (success) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/tobeytypes")
    public List<TobeyType> getTobeyTypes() {
        List<TobeyType> tobeyTypes = tobeyTypeService.findAll();
        return tobeyTypes;
    }

    private Result<Void> makeResult(BindingResult bindingResult) {
        Result<Void> result = new Result<>();
        for (ObjectError err : bindingResult.getAllErrors()) {
            result.addMessage(err.getDefaultMessage(), ResultStatus.INVALID);
        }
        return result;
    }
}


