import React from "react";
import Applicant from "./Applicant";

export default function ApplicantsList(props) {
  const { applicants } = props;
  console.log(props);
  return (
    applicants &&
    applicants.map((person) => {
      return (
        <Applicant
          name={person.name}
          lastname={person.lastname}
          email={person.email}
          phone={person.phone}
          resume={person.resume}
        />
      );
    })
  );
}
