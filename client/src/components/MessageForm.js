import { useState } from "react";
function MessageForm(){

    const [name, setName] = useState("")
    const [message, setMessage] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <form onSubmit={onSubmit}>
        <h2>Leave a Message for Tobey</h2>

        <div>
            <label htmlFor="name"> Name: </label>
            <input
            type="text"
            id="name"
            name="name"
            value={name}
             onChange ={onSubmit}
            />
           
        </div>
        <div>
            <label htmlFor="message"> Your Message: </label>
            <input
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={onSubmit}
            />
        </div>

        <div>
            <button type="submit">Send</button>
        </div>
        </form>
    );
}

export default MessageForm;