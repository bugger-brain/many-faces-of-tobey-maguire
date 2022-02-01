package maguire.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="tobeytypes")
public class TobeyType {

    @Id
    private int tobeytypeId;
    @NotBlank
    private String vibe;

    public int getTobeytypeId() {
        return tobeytypeId;
    }

    public void setTobeytypeId(int tobeytypeId) {
        this.tobeytypeId = tobeytypeId;
    }

    public String getVibe() {
        return vibe;
    }

    public void setVibe(String vibe) {
        this.vibe = vibe;
    }
}
