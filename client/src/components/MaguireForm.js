import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function MaguireForm() {

    const [maguire, setMaguire] = useState({
        maguireId: 0,
        name: "",
        description: "",
        imageUrl: "",
        tobeyTypes: []
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

    function add() {

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(maguire)
        };

        fetch("http://localhost:8080/maguire", init)
            .then(response => {
                if (response.status === 201) {
                    history.push("/");
                } else {
                    return response.json();
                }
            }).then(result => {
                if (result) {
                    setErrors(result.messages);
                }
            }).catch(console.error);
    }

    function update() {
        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(maguire)
        };
        fetch(`http://localhost:8080/maguire/${maguire.maguireId}`, init)
            .then(response => {
                if (response.status === 204) {
                    history.push("/");
                } else if (response.status === 404) {
                    setErrors(["Maguire not found."]);
                } else {
                    return response.json();
                }
            }).then(result => {
                if (result) {
                    setErrors(result.messages);
                }
            }).catch(console.log);
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
                <h2>{maguire.maguireId ? "Edit" : "Add"} Maguire</h2>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" className="form-control"
                        onChange={onChange} value={maguire.name}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description" name="description" className="form-control"
                        onChange={onChange} value={maguire.description}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input id="imageUrl" name="imageUrl" type="url" className="form-control"
                        onChange={onChange} value={maguire.imageUrl}></input>
                </div>
                {/* <div className="mb-2">
                    <h3>TobeyTypes</h3>
                    {powers.map(p => <div key={p.powerId} className="form-check">
                        <input className="form-check-input" type="checkbox"
                            value={p.powerId} checked={maguire.powers.find(i => i.powerId === p.powerId)} onChange={onChange}
                            id={"power" + p.powerId} name="powers"></input>
                        <label className="form-check-label" htmlFor={"power" + p.powerId}>
                            {p.name}
                        </label>
                    </div>)}
                </div> */}
                <div>
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <Link to="/" className="btn btn-info">Cancel</Link>
                </div>
            </form >
        </>
    );

}

export default MaguireForm;