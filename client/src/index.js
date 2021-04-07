import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import JobDesc from "./pages/JobDesc";
import JobInfoForCompany from "./pages/JobInfoForCompany";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/Signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/description/:id" component={JobDesc} />
      <Route path="/descforcompany/:id" component={JobInfoForCompany} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
