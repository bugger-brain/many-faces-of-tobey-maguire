
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Maguires from "./components/Maguire";
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
          <Maguires />
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
      </Switch>
    </Router>
  </div>
  )
}
export default App;
