import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Tobey from "./components/Tobey";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Filmography from "./components/Filmography";
import MessageForm from "./components/MessageForm";
import Home from "./components/Home";
import DeleteConfirmation from "./components/DeleteConfirmation";
import CarouselSpin from "./components/CarouselSpin";
import TobeyForm from "./components/TobeyForm";

import EditContext from "./contexts/EditContext";
import { useState } from "react";

function App() {

  const [editing, setEditing] = useState(false);


  return (
    <div className="container">
      <EditContext.Provider value={{ editing, setEditing }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path={["/edit/:id", "/add"]}>
              {editing && <TobeyForm />}
            </Route>
            <Route path="/biography">
              <Bio />
            </Route>
            <Route path="/filmography">
              <Filmography />
            </Route>
            <Route path="/delete/:tobeyId">
              {editing && <DeleteConfirmation />}
            </Route>
            <Route path="/leaveamessage">
              <MessageForm />
            </Route>
            <Route path={"/tobey/:tagId"}>
              <Tobey />
            </Route>
          </Switch>
        </Router>
      </EditContext.Provider>
    </div>
  )
}
export default App;