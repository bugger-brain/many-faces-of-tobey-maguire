import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Maguire () {
    const [maguires, setMaguires] = useState([]);
    const [errors, setErrors] = useState([]);
    const [tobyType, setTobyType] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [view, setView] = useState("List");

    useEffect(() => {
        fetch("http://localhost:8080/api/maguire")
            .then(response => response.json())
            .then(data => setMaguires(data))
            .catch(error => console.log(error));
    })
}