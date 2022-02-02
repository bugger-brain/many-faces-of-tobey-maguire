package maguire.domain;

import maguire.data.TagRepository;
import maguire.models.Tag;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    private final TagRepository repository;

    public TagService(TagRepository repository) {
        this.repository = repository;
    }

    public List<Tag> findAll() {
        return repository.findAll();
    }
}
