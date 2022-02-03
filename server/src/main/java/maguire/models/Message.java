package maguire.models;



import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.sql.Blob;

@Entity
public class Message {
    @Id
    private int messageId;
    @NotBlank
    private String name;
    @NotBlank
    private String description;

   // private Blob file;

    public int getMessageId() {
        return messageId;
    }

    public void setMessageId(int messageId) {
        this.messageId = messageId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
//
//    public Blob getFile() {
//        return file;
//    }
//
//    public void setFile(Blob file) {
//        this.file = file;
//    }





}
