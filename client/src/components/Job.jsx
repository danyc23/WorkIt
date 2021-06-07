import React from "react";
import { Link } from "react-router-dom";

export default function Job(props) {
  let { title } = props;
  let { id } = props;
  let { location } = props;
  let { description } = props;
  let { date } = props;
  let { page } = props;
  return (
    <Link to={`/${page}/${id}`} className="job-container">
      <h2 className="job-title job-subtitle__spacing">{title}</h2>
      <p className="job-location job-subtitle__spacing">Location: {location}</p>
      <p className="job-description job-subtitle__spacing">
        Description: {description}
      </p>
      <p className="job-date job-subtitle__spacing">Posted: {date}</p>
    </Link>
  );
}
