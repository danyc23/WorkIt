import React, { useState } from "react";
import axios from "axios";

export default function ApplicationModal(props) {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [phone, setPhone] = useState();
  const [details, setDetails] = useState();
  const [resume, setResume] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //new Application to be included
    const data = new FormData();
    data.append("name", name);
    data.append("lastName", lastname);
    data.append("email", email);
    data.append("salary", salary);
    data.append("details", details);
    data.append("phone", phone);
    data.append("resume", resume);

    newApplication(data);
    e.target.reset();
    alert("Applied Succesfully");
  };

  const newApplication = (data) => {
    const { id } = props.props.match.params;
    axios
      .post(`http://localhost:5000/application/${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("this is the error --->", err);
      });
  };
  // http://localhost:5000/application/${id}
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input onChange={(e) => setSalary(e.target.value)} type="number" />
        </div>
        <div>
          <label htmlFor="phone">phone Number</label>
          <input onChange={(e) => setPhone(e.target.value)} type="number" />
        </div>
        <div>
          <label htmlFor="details">Details</label>
          <textarea onChange={(e) => setDetails(e.target.value)} type="text" />
        </div>
        <div>
          <label htmlFor="resume">Resume</label>
          <input
            onChange={(e) => setResume(e.target.files[0])}
            name="resume"
            type="file"
            accept=".pdf"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
