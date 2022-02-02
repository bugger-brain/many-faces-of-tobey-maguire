import { useEffect, useState } from "react";

function Home() {
    const [tobeys, setTobeys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/tobey")
        .then(response => response.json())
        .then(data => setTobeys(data));
    }, []);

    return tobey.map((tobey) => (
        <Tobey key = {tobey.tobeyId} tobey ={tobey} />
    ))
}

export default Home;