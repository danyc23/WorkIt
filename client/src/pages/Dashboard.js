import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import JobInDash from "../components/JobsInDash";
import JobList from "../components/JobList";

class Dashboard extends React.Component {
  logout = () => {
    sessionStorage.removeItem("authToken");
  };
  state = {
    title: "",
    date: "",
    location: "",
    description: "",
    posts: [],
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  newPost = (id) => {
    const { title } = this.state;
    const { date } = this.state;
    const { location } = this.state;
    const { description } = this.state;
    const user_id = sessionStorage.getItem("userId");
    axios.post(`http://localhost:5000/post/${id}`, {
      user_id,
      title,
      date,
      location,
      description,
    });
    this.setState({
      title: "",
      date: "",
      location: "",
      description: "",
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { date } = this.state;
    const { location } = this.state;
    const { description } = this.state;
    if (!title || !date || !location || !description) {
      alert("Please fill all spaces");
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
      console.log("this worked");
      this.newPost(sessionStorage.getItem("userId"));
      e.target.reset();
    }
  };
  render(props) {
    return (
      <div>
        <h1 className="dashboard">Dashboard</h1>
        <Link to="/">
          <p onClick={this.logout}>Log out</p>
        </Link>
        <section>
          <form onSubmit={this.handleSubmit} className="post-form">
            <h2 className="post-title">Title</h2>
            <input
              className="post-title__input"
              onChange={this.handleChange}
              name="title"
              type="text"
            />
            <h2 className="post-date">Date</h2>
            <input
              className="post-date__input"
              onChange={this.handleChange}
              name="date"
              type="date"
            ></input>
            <h2 className="post-location">Location</h2>
            <input
              className="post-location__input"
              onChange={this.handleChange}
              name="location"
              type="text"
            ></input>
            <h2 className="post-description">Description</h2>
            <textarea
              className="post-description__input"
              onChange={this.handleChange}
              name="description"
            />
            <button
              onSubmit={this.handleSubmit}
              type="submit"
              className="post-submit"
            >
              Submit
            </button>
          </form>
        </section>
        <section>
          <JobList jobs={this.state.posts} />
        </section>
      </div>
    );
  }
}

export default Dashboard;
