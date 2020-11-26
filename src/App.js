import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Resources from "./pages/Resources";
import Resource from "./pages/Resource";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/resources/:id" component={Resource} />
        </Switch>
      </div>
  );
}

export default App;
