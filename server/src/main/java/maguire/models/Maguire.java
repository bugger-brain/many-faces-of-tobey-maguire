package maguire.models;

import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="tobey_maguire")
public class Maguire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maguireId;
    @NotBlank(message = "Name is required")
    private String name;
    @NotBlank(message = "Description is required")
    private String description;
    @URL(message = "Image URL must be a URL.")
    private String imageUrl;

    @ManyToMany
    @JoinTable (name = "tobey_maguire_tobeytypes",
            joinColumns = @JoinColumn(name = "maguire_id"),
            inverseJoinColumns = @JoinColumn(name = "tobeytype_id"))
    private List<TobeyType> tobeytypes = new ArrayList<>();

    public int getMaguireId() {
        return maguireId;
    }

    public void setMaguireId(int maguireId) {
        this.maguireId = maguireId;
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

    public List<TobeyType> getTobeytypes() {
        return tobeytypes;
    }

    public void setTobeytypes(List<TobeyType> tobeytypes) {
        this.tobeytypes = tobeytypes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Maguire maguire = (Maguire) o;
        return maguireId == maguire.maguireId && name.equals(maguire.name) && description.equals(maguire.description) && imageUrl.equals(maguire.imageUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(maguireId, name, description, imageUrl);
    }
}
