import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Resources from "./pages/Resources";
import Resource from "./pages/Resource";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/resources" exact component={Resources} />
          <Route path="/resources/:id" component={Resource} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
