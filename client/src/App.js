
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Tobey from "./components/Tobey";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Filmography from "./components/Filmography";
import MessageForm from "./components/MessageForm";
function App() {
  return (
  <div className="container">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Tobey />
        </Route>
        <Route path="/biography">
          <Bio />
        </Route>
        <Route path="/filmography">
          <Filmography />
        </Route>
        <Route path="/leaveamessage">
          <MessageForm />
        </Route>
        <Route path={"/tobey/:tobeyTypeId"}>
          <Tobey  />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}
export default App;
