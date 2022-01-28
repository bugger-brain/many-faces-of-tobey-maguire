package maguire.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class TobeyType {

    @Id
    private int tobeyTypeId;
    @NotBlank
    private String vibe;
    @NotBlank
    private String description;

}
