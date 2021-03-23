import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import DescInfo from "../components/DescInfo";

class JobDesc extends React.Component {
  state = {
    allData: [],
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.getPosts(id);
  };
  getPosts = (id) => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => {
        this.setState({
          allData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <DescInfo info={this.state.allData} />
        {!sessionStorage.getItem("authToken") && <button>Apply</button>}
      </div>
    );
  }
}
export default JobDesc;
