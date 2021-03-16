import React from "react";
import { Redirect, Link } from "react-router-dom";
const axios = require("axios");

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    loggedIn: false,
    newId: "",
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (!this.state.email || !this.state.password) {
      alert("Type password and email ");
    } else {
      axios
        .post("http://localhost:5000/company/login", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res);
          sessionStorage.authToken = res.data.token;
          sessionStorage.userId = res.data.id;
          this.setState({ loggedIn: true, newId: res.data.id });
        });
    }
  };

  render() {
    return sessionStorage.getItem("authToken") ? (
      <Redirect to={`/dashboard/${this.state.newId}`} />
    ) : (
      <section className="login">
        <div className="login-main__container">
          <div className="login-border">
            <div className="login-title__container">
              <h1 className="login-title">Login</h1>
            </div>
            <form className="login-form" onSubmit={this.submitHandler}>
              <div className="login-container">
                <label className="login-label" for="email">
                  Email
                </label>
                <input
                  onChange={this.changeHandler}
                  className="login-input"
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              <div className="login-container">
                <label className="login-label" for="password">
                  Password
                </label>
                <input
                  onChange={this.changeHandler}
                  className="login-input"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="login-container login-container--last">
                <div>
                  <button className="login-btn" type="submit">
                    Log in
                  </button>
                  <input type="checkbox" name="remember" />
                  <label className="login-checkbox__text">Remember me</label>
                </div>
                <div className="login-container__remember">
                  <div>
                    <Link to="/">
                      <button className="login-container__remember-btn">
                        Cancel
                      </button>
                    </Link>
                  </div>

                  <Link className="nav-link" to="/signup">
                    <p className="login-register__text">Register</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
