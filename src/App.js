import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Details";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/detail" component={Detail}/>
    </Switch>
    </>
  );
}

export default App;
