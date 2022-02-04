import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tobey from "./components/Tobey";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Filmography from "./components/Filmography";
import MessageForm from "./components/MessageForm";
import Home from "./components/Home";
import CarouselSpin from "./components/CarouselSpin";
function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/" >
            <CarouselSpin />
          </Route> */}
          <Route path="/biography">
            <Bio />
          </Route>
          <Route path="/filmography">
            <Filmography />
          </Route>
          <Route path="/leaveamessage">
            <MessageForm />
          </Route>
          <Route path={"/tobey/:tagId"}>
            <Tobey />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;