import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function TobeyForm() {

    const [tobey, setTobey] = useState({
        tobeyId: 0,
        name: "",
        description: "",
        imageUrl: "",
        tags: []
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
                    setTobey(m);
                })
                .catch(console.error);
        }
    
        // fetch("http://localhost:8080/api/tobey/tag")
        //     .then(response => {
        //         if (response.status === 200) {
        //             return response.json();
        //         }
        //         return Promise.reject("could not fetch tags");
        //     })
        //     .then(t => setTags(t))
        //     .catch(console.error);
    }, [tobeyId]);
    
    function onChange(event) {
        const nextTobey = { ...tobey };
        // if (event.target.name === "tags") {
        //     const tagId = parseInt(event.target.value, 10);
        //     if (event.target.checked) {
        //         const nextTag = tags.find(t => t.tagId === tagId);
        //         nextTobey.tags.push(nextTag);
        //     } else {
        //         const nextTags = nextTobey.tags.filter(i => i.tagId !== tagId);
        //         nextTobey.tags = nextTags;
        //     }
        // } else {
        //     nextTobey[event.target.name] = event.target.value;
        // }
        nextTobey[event.target.name] = event.target.value;
    
        setTobey(nextTobey);
    }

    function onSubmit(event) {
        event.preventDefault();
        if (tobey.tobeyId) {
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
            body: JSON.stringify(tobey)
        };

        fetch("http://localhost:8080/api/tobey", init)
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
            body: JSON.stringify(tobey)
        };
        fetch(`http://localhost:8080/api/tobey/edit/${tobey.tobeyId}`, init)
            .then(response => {
                if (response.status === 204) {
                    history.push("/");
                } else if (response.status === 404) {
                    setErrors(["tobey not found."]);
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
                <h2>{tobey.tobeyId ? "Edit" : "Add"} tobey</h2>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" className="form-control"
                        onChange={onChange} value={tobey.name}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input id="description" name="description" className="form-control"
                        onChange={onChange} value={tobey.description}></input>
                </div>
                <div className="mb-2">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input id="imageUrl" name="imageUrl" type="url" className="form-control"
                        onChange={onChange} value={tobey.imageUrl}></input>
                </div>

                {/* <div className="mb-2">
                    <label htmlFor="tags" className="form-label">Tags</label>

                    <select id="tags" name="tags" type="url" className="form-control"
                        onChange={onChange} value={tobey.tags}></select>
                </div> */}

                {/* <div className="mb-2">
                    <h3>tags</h3>
                    {powers.map(p => <div key={p.powerId} className="form-check">
                        <input className="form-check-input" type="checkbox"
                            value={p.powerId} checked={tobey.powers.find(i => i.powerId === p.powerId)} onChange={onChange}
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

export default TobeyForm;