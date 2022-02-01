import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function MaguireForm() {

    const [maguire, setMaguire] = useState({
        maguireId: 0,
        name: "",
        description: "",
        imageUrl: "",
        powers: []
    });
    const [tobeyTypes, setTobeyTypes] = useState([]);
    const [errors, setErrors] = useState([]);
    
    const { id: maguireId } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        if (maguireId) {
            fetch(`http://localhost:8080/api/maguire/${maguireId}`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject("could not fetch tobey");
                })
                .then(m => {
                    // h.humanName = h.humanName || "";
                    setMaguire(m);
                })
                .catch(console.error);
        }
    
        fetch("http://localhost:8080/api/maguire/tobeytype")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject("could not fetch tobeytypes");
            })
            .then(t => setTobeyTypes(t))
            .catch(console.error);
    }, [maguireId]);
    
    function onChange(event) {
        const nextMaguire = { ...maguire };
        if (event.target.name === "tobeyTypes") {
            const tobeyTypeId = parseInt(event.target.value, 10);
            if (event.target.checked) {
                const nextTobeyType = tobeyTypes.find(t => t.tobeyTypeId === tobeyTypeId);
                nextMaguire.tobeyTypes.push(nextTobeyType);
            } else {
                const nextTobeyTypes = nextHero.tobeyTypes.filter(i => i.tobeyTypeId !== tobeyTypeId);
                nextMaguire.tobeyTypes = nextTobeyTypes;
            }
        } else {
            nextMaguire[event.target.name] = event.target.value;
        }
    
        setHero(nextMaguire);
    }

    function onSubmit(event) {
        event.preventDefault();
        if (maguire.maguireId) {
            update();
        } else {
            add();
        }
    }

}

export default MaguireForm;