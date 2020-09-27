import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigasi, Ch, A } from "./Components/index";

function App() {
  return (
    <Router>
      <Navigasi />
      <Switch>
        <Route exact path="/" component={Ch} />
        <Route path="/a" component={A} />
      </Switch>
    </Router>
  );
}

export default App;
