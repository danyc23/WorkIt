import React from "react";
import { Link } from "react-router-dom";

export default function Job(props) {
  let { title } = props;
  let { location } = props;
  let { description } = props;
  let { date } = props;
  return (
    <div className="job-container">
      <h2 className="job-title">{title}</h2>
      <p className="job-location">{location}</p>
      <p className="job-description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
}
