package maguire.domain;

import java.util.ArrayList;
import java.util.List;

public class Result<T> {

    private ResultStatus status = ResultStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private T payload;

    public ResultStatus getStatus() {
        return status;
    }

    public boolean isSuccess() {
        return status == ResultStatus.SUCCESS;
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public void addMessage(String message, ResultStatus status) {
        messages.add(message);
        this.status = status;
    }
}
