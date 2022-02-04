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
                if (response.status ===200) {
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
        
                       {tobeys.map(tobey => {
                       return <div key={tobey.tobeyId} className = {`col carousel-item ${tobey.tobeyId === currentTobey && "active" }`}>
                       <TobeyCard tobey ={tobey} />
               </div>})}
                   
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <center><button type="button" onClick={randomize} class="button btn-lg btn-warning">
                <span class="button__text">Spin for your Tobey of the Day!</span>
            </button></center>

        </div>


    )


    // <Carousel>
    //     <Carousel.Item>
    //         <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=First slide&bg=373940"
    //             alt="First slide"
    //         />
    //         <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //         <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=Second slide&bg=282c34"
    //             alt="Second slide"
    //         />

    //         <Carousel.Caption>
    //             <h3>Second slide label</h3>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //         <img
    //             className="d-block w-100"
    //             src="holder.js/800x400?text=Third slide&bg=20232a"
    //             alt="Third slide"
    //         />

    //         <Carousel.Caption>
    //             <h3>Third slide label</h3>
    //             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    // </Carousel>
}

export default CarouselSpin;