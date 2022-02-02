import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function TobeyForm() {

    const [tobey, setTobey] = useState({
        tobeyId: 0,
        name: "",
        description: "",
        imageUrl: "",
        powers: []
    });
    const [tags, setTags] = useState([]);
    const [errors, setErrors] = useState([]);
    
    const { id: tobeyId } = useParams();
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
                .then(m => {
                    // h.humanName = h.humanName || "";
                    setTobey(m);
                })
                .catch(console.error);
        }
    
        fetch("http://localhost:8080/api/tobey/tag")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject("could not fetch tags");
            })
            .then(t => setTags(t))
            .catch(console.error);
    }, [tobeyId]);
    
    function onChange(event) {
        const nextTobey = { ...tobey };
        if (event.target.name === "tags") {
            const tagId = parseInt(event.target.value, 10);
            if (event.target.checked) {
                const nextTag = tags.find(t => t.tagId === tagId);
                nextTobey.tags.push(nextTag);
            } else {
                const nextTags = nextTobey.tags.filter(i => i.tagId !== tagId);
                nextTobey.tags = nextTags;
            }
        } else {
            nextTobey[event.target.name] = event.target.value;
        }
    
        setHero(nextTobey);
    }

    function onSubmit(event) {
        event.preventDefault();
        if (tobey.tobeyId) {
            update();
        } else {
            add();
        }
    }

}

export default TobeyForm;