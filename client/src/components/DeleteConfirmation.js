import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function DeleteConfirmation() {

    const [tobey, setTobey] = useState({ 
        name: "",
        description: ""
    });
    const { tobeyId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (tobeyId) {
            fetch(`http://localhost:8080/api/tobey/${tobeyId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject("could not fetch tobey");
                })
                .then(t => setTobey(t))
                .catch(console.error);
        } else {
            history.push("/");
        }
    }, [tobeyId]);

    const handleDelete = () => {
        fetch(`http://localhost:8080/api/tobey/${tobeyId}`, { method: "DELETE" })
            .then(() => history.push("/"));
    };

    return (
        <div>
            <div className="alert alert-danger">
                Delete {tobey.name} and all its tags?
            </div>
            <div>
                <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
                <Link to="/" className="btn btn-info">Cancel</Link>
            </div>
        </div>
    );
}

export default DeleteConfirmation;