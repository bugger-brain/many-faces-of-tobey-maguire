
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaguireCard from "./MaguireCard";



function Maguire () {
    const [maguires, setMaguires] = useState([]);
    const { tobeyTypeId } = useParams();
    console.log(tobeyTypeId);

    const [errors, setErrors] = useState([]);

    //do i need these
    const [tobeyType, setTobeyType] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [view, setView] = useState("List");

    useEffect(() => {
        fetch(`http://localhost:8080/api/maguire${tobeyTypeId ? "/tobey/"+tobeyTypeId:""}`)
            .then(response => {
                if (response.status ===200) {
                    return response.json();
                }
                return Promise.reject("bad fetch");
            }).then(maguires => setMaguires(maguires))
            .catch(console.error);
    }, []);

    return (
        <div className="row row-cols-md-3 g-2">
            {maguires.map(maguire => (<div key={maguire.maguireId} className = "col">
                <MaguireCard maguire ={maguire} />
        </div>))}
        </div>
    );
    
    
}

export default Maguire;