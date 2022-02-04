import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TobeyCard from "./TobeyCard";

function Tobey () {
    const [tobeys, setTobeys] = useState([]);
    const { tagId } = useParams();
    const history = useHistory();

    // console.log(tagId);

    const [errors, setErrors] = useState([]);

    //do i need these
    const [tag, setTag] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [view, setView] = useState("List");

    useEffect(() => {
        fetch(`http://localhost:8080/api/tobey${tagId ? "/tag/"+tagId:""}`)
            .then(response => {
                if (response.status ===200) {
                    return response.json();
                }
                return Promise.reject("bad fetch");
            }).then(tobeys => setTobeys(tobeys))
            .catch(console.error);
    }, [history, tagId]);

    return (
        
        <div className="row row-cols-md-3 g-2">
            {tobeys.map(tobey => (<div key={tobey.tobeyId} className = "col">
                <TobeyCard tobey ={tobey} />
        </div>))}
        </div>
    );
    
}

export default Tobey;