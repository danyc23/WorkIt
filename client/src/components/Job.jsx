import React from "react";

export default function Job(props) {
  let { title } = props;
  let { location } = props;
  let { description } = props;
  let { date } = props;
  return (
    <div>
      <h2 className="job-title">{title}</h2>
      <p className="job-location">{location}</p>
      <p className="job-description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
}
