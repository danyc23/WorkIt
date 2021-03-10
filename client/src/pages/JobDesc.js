import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class JobDesc extends React.Component {
  state = {
    date: "",
    description: "",
    id: 0,
    location: "",
    title: "",
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getPosts(id);
  };
  getPosts = (id) => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => {
        let { date, id, location, title, description } = res.data;
        this.setState({
          date: date,
          description: description,
          id: id,
          location: location,
          title: title,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h2>Title</h2> <p>{this.state.title}</p>
        <h2>Location</h2> <p>{this.state.location}</p>
        <h2>Date</h2> <p>{this.state.date}</p>
        <h2>Description</h2> <p>{this.state.description}</p>
        <button>Apply</button>
      </div>
    );
  }
}
export default JobDesc;
