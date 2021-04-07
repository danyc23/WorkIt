import React from "react";
import Job from "./Job";

export default function JobList(props) {
  let { jobs } = props;
  return (
    <ul className="job-list">
      {jobs &&
        jobs.map((job) => {
          return (
            <Job
              page={props.page}
              key={job.id}
              id={job.id}
              title={job.title}
              companyId={job.companyId}
              date={job.date}
              location={job.location}
              description={job.description}
            />
          );
        })}
    </ul>
  );
}
