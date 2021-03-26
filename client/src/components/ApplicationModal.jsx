import React, { useState } from "react";
import axios from "axios";

export default function ApplicationModal() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [salary, setSalary] = useState();
  const [phone, setPhone] = useState();
  const [resume, setResume] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //working on this
  };

  return (
    <form>
      <div>
        <div>
          <label for="name">First Name</label>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" />
        </div>
        <div>
          <label for="email">Email</label>
          <input onChange={(e) => setLastName(e.target.value)} type="email" />
        </div>
        <div>
          <label for="salary">Salary</label>
          <input onChange={(e) => setSalary(e.target.value)} type="number" />
        </div>
        <div>
          <label for="phone">phone Number</label>
          <input onChange={(e) => setPhone(e.target.value)} type="number" />
        </div>
        <div>
          <label for="resume">Resume</label>
          <input
            onChange={(e) => setResume(e.target.value)}
            name="resume"
            type="file"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
