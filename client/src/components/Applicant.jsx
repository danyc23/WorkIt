import React from "react";

export default function Applicant(props) {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.lastname}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}
