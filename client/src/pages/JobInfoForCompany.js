import React, { useState, useEffect } from "react";
import axios from "axios";
import DescInfo from "../components/DescInfo";
import ApplicantsList from "../components/ApplicantsList";

export default function JobInfoForCompany(props) {
  const { id } = props.match.params;
  const [info, setInfo] = useState([]);
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    getJobs(id);
  }, []);
  const getJobs = (id) => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((response) => {
        let companyPost = response.data;
        setInfo(companyPost);
        setApplicants(companyPost.applicant);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <DescInfo info={info} />
      <ApplicantsList applicants={applicants} />
    </div>
  );
}
