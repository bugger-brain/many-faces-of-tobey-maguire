package maguire.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Tag {

    @Id
    private int tagId;
    @NotBlank
    private String vibe;

    public int getTagId() {
        return tagId;
    }

    public void setTagId(int tagId) {
        this.tagId = tagId;
    }

    public String getVibe() {
        return vibe;
    }

    public void setVibe(String vibe) {
        this.vibe = vibe;
    }
}
