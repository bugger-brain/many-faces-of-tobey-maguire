import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const [maguire, setMaguire] = useState({
    maguireId: 0,
    name: "",
    description: "",
    imageUrl: "",
    powers: []
});
const [powers, setPowers] = useState([]);
const [errors, setErrors] = useState([]);