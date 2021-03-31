import React, { Component } from "react";
import axios from "axios";

export default class ApplicantsForPost extends Component {
  state = {
    applicants: [],
  };
  getApplicants = (id) => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return <div></div>;
  }
}
