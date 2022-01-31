import { useEffect, useState } from "react";

function Home() {
    const [maguires, setMaguires] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/maguire")
        .then(response => response.json())
        .then(data => setMaguires(data));
    }, []);

    return maguires.map((maguire) => (
        <Maguire key = {maguire.maguireId} maguire ={maguire} />
    ))
}

export default Home;