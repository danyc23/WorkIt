import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
