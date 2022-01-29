
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Maguires from "./components/Maguire";
import NavBar from "./components/NavBar";
import Maguire from "./components/Maguire"
function App() {
  return (
  <div className="container">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Maguires />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}
export default App;
