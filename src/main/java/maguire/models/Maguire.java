package maguire.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
public class Maguire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int maguireId;
//    @NotBlank(message = "Maguire title is required")
    

}
