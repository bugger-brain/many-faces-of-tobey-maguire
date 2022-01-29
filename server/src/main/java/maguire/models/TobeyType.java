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
}
