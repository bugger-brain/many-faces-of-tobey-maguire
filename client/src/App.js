import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
//import NavBar from ".NavBar";
import Maguire from "./components/Maguire"
function App() {
  return (
    <Maguire />
    // <Router>
    //   <NavBar />

    //   <Switch>
    //     <Route exact path = "/">
    //       <Home />
    //     </Route>

    //   </Switch>
    // </Router>
  )
}
export default App;
