import { useState } from "react";
import {Link, useHistory} from "react-router-dom";
function MessageForm(){
    const defaultMessage=[
        {
        name: "",
        description: ""
        }
    ];

    const [messages, setMessages] = useState(defaultMessage);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");

    const history = useHistory();

   

    const onSubmit = (event) => {
        event.preventDefault();

        const updatedMessages = {...messages};

        const newMessage={
            name,
            description
        };
        setMessages([...messages, newMessage]);

        setName("");
        setDescription("");
        console.log(messages);
        
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
             onChange ={event=> setName(event.target.value)}
            />
           
        </div>
        <div>
            <label htmlFor="description"> Your Message: </label>
            <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={event=> setDescription(event.target.value)}
            />
        </div>

        <div>
            <button type="submit">Send</button>
            <Link to="/"> Cancel</Link>
        </div>
        </form>
    );
}

export default MessageForm;