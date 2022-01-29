package maguire.controllers;

import maguire.domain.MaguireService;
import maguire.domain.TobeyTypeService;
import maguire.models.Maguire;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return maguireService.findAll();
    }

//    @GetMapping
//    public

}


