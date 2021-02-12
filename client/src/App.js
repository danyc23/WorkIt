import React from "react";
import axios from "axios";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
class App extends React.Component {
  state = {
    allJobs: [],
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
      <div>
        <Navbar />
        <SearchBar />
        <JobList jobs={this.state.allJobs} />
      </div>
    );
  }
}

export default App;
