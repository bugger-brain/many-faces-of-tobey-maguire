import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function MessageForm() {
   

    const [message, setMessage] = useState({
        messageId: 0,
        name: "",
        description: ""
        // add file
    })
    const [messages, setMessages] = useState([]);

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
         fetch("http://localhost:8080/api/leaveamessage")
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.log(error))
    }, [messages]);

    const addMessage = () => {

        const initAdd = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(message)
        }

        fetch("http://localhost:8080/api/leaveamessage", initAdd)
        .then(response => {
            if (response.status === 201 || response.status === 400) {
                <Link to={"/leaveamessage"} />
                return response.json();
            }
            return Promise.reject("Unexpected response from the server.");
        })
        .then(data => {
            if(data.messageId) {
                setMessages([...messages, data]);
                setErrors([]);
            } else {
                setErrors(data)
            }
        })
        .catch(error => console.log(error))
    }

    function onChange(event) {
        const nextMessage = { ...message };
        nextMessage[event.target.name] = event.target.value;
        setMessage(nextMessage);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMessage();
        clearForms();
    }

    function clearForms() {
        const blankMessage = {name:"",description:""};
        setMessage(blankMessage);
    }

    const renderMessages = () => {
        return messages.map(message =>
            <div key={message.messageId} className="row">
                <div className="col-8">
                    {message.name}: {message.description}
                </div>
            </div>
             )
    }
    
    return (
       <>
       {errors.length > 0 && 
            <div className="alert alert-danger">
                <ul>
                    {errors.map(err => <li>{err}</li>)}
                </ul>
            </div>}
        <form onSubmit={onSubmit}>
            <h2>Leave a Message for Tobey!!</h2>
            <div>
                <label htmlFor="name"> Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={message.name}
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description"> Your Message: </label>
                <textarea class="form-control"
                    type="text"
                    id="description"
                    name="description"
                    value={message.description}
                    onChange={onChange}
                    rows="3"
                    required
                />
            </div>
            {/* <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Attach an image!</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple></input>
            </div> */}
            <div>
                <button type="submit">Send</button>
                <button> <Link to="/"> Cancel</Link></button>
            </div>
        </form>
        <div>
            <ul className="list-group">
                <h5>See Messages from Other TobeyFans:</h5>
                    {renderMessages()}
            </ul>
         </div>
        </>
    );
}

export default MessageForm;