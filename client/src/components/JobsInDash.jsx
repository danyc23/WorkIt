import React, { Component } from "react";
import axios from "axios";
import JobList from "./JobList";

export default class JobsInDash extends Component {
  state = {
    posts: [],
    page: "test",
  };
  componentDidMount = () => {
    this.getJobs(sessionStorage.getItem("userId"));
  };
  getJobs = (id) => {
    axios
      .get(`http://localhost:5000/company/${id}`)
      .then((response) => {
        let companyPost = response.data.posts;
        console.log(companyPost);
        this.setState({
          posts: companyPost,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render(props) {
    return (
      <div>
        <JobList page={this.state.page} posts={this.state.posts} />
      </div>
    );
  }
}
