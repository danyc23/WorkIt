import React from "react";

export default function Applicant(props) {
  console.log(props);
  return (
    <div className="applicant-container">
      <p className="applicant-name">{props.name}</p>
      <p className="applicant-lastName">{props.lastname}</p>
      <p className="applicant-email">{props.email}</p>
      <p className="applicant-phone">{props.phone}</p>
    </div>
  );
}
