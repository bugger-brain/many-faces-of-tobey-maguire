import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tobey from "./Tobey";
import CarouselSpin from "./CarouselSpin";
import TobeyCard from "./TobeyCard";

function Home() {
  const [tobeys, setTobeys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/tobey")
      .then(response => response.json())
      .then(data => setTobeys(data));
  }, []);



  return (
    <div>
      <h1><u><b><center>WELCOME TO TOBEY TOWN!!</center></b></u></h1>


      <Route path="/" exact>
        <CarouselSpin />
      </Route>
      
      <Route path="/" exact>
        <Tobey />
      </Route>

      

    </div>
  )
}


export default Home;