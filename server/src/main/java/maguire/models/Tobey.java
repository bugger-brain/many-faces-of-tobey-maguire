package maguire.models;

import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Tobey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tobeyId;
    @NotBlank(message = "Name is required")
    private String name;
    @NotBlank(message = "Description is required")
    private String description;
    @URL(message = "Image URL must be a URL.")
    private String imageUrl;

    @ManyToMany
    @JoinTable (name = "tobey_tag",
            joinColumns = @JoinColumn(name = "tobey_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private List<Tag> tags = new ArrayList<>();

    public int getTobeyId() {
        return tobeyId;
    }

    public void setTobeyId(int tobeyId) {
        this.tobeyId = tobeyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tobey tobey = (Tobey) o;
        return tobeyId == tobey.tobeyId && name.equals(tobey.name) && description.equals(tobey.description) && imageUrl.equals(tobey.imageUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tobeyId, name, description, imageUrl);
    }
}
