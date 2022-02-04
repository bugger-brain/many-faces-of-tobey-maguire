import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import TobeyCard from "./TobeyCard";
import Tobey from "./Tobey";

function CarouselSpin() {

    const [tobeys, setTobeys] = useState([]);
    const [currentTobey, setCurrentTobey] = useState(1);

    useEffect(() => {
        randomize();
        fetch(`http://localhost:8080/api/tobey`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject("bad fetch");
            }).then(tobeys => setTobeys(tobeys))
            .catch(console.error);
    }, []);

    function randomize() {
        const idMap = tobeys.map(t => t.tobeyId);
        const randomIndex = Math.floor(Math.random() * idMap.length);

        setCurrentTobey(idMap[randomIndex]);
    }

    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            
                            {tobeys.map(tobey => {
                                return <div key={tobey.tobeyId} className={`col carousel-item ${tobey.tobeyId === currentTobey && "active"}`}>
                                    <TobeyCard tobey={tobey} />
                                </div>
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>


            <center><button type="button" onClick={randomize} class="button btn-lg btn-warning">
                <span class="button__text">Spin for your Tobey of the Day!</span>
            </button></center>

        </div>
    )
}

export default CarouselSpin;