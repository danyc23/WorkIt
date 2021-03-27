import React from "react";
import axios from "axios";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import DescInfo from "../components/DescInfo";
import ApplicationModal from "../components/ApplicationModal";
Modal.setAppElement("#root");
class JobDesc extends React.Component {
  state = {
    allData: [],
    modalIsOpen: false,
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
        {!sessionStorage.getItem("authToken") && (
          <button
            onClick={(e) =>
              this.setState({ modalIsOpen: !this.state.modalIsOpen })
            }
          >
            Apply
          </button>
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
        >
          <ApplicationModal props={this.props} />
          <button onClick={() => this.setState({ modalIsOpen: false })}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}
export default JobDesc;
