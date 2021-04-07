import React from "react";

export default function ApplicantsList(props) {
  const { applicants } = props;
  return <ul>{applicants && applicants.map((applicant) => {})}</ul>;
}
