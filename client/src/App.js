import React from "react";
import axios from "axios";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";

class App extends React.Component {
  state = {
    allJobs: [],
    page: "description",
  };
  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts = () => {
    axios
      .get("http://localhost:5000/post")
      .then((response) => {
        this.setState({
          allJobs: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <SearchBar />
        <JobList page={this.state.page} jobs={this.state.allJobs} />
      </>
    );
  }
}

export default App;
