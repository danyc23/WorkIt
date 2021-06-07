import React from "react";

export default function DescInfo(props) {
  let { title, location, date, description } = props.info;
  return (
    <div className="desc-info">
      <h2 className="desc-info__title">Title</h2> <p>{title}</p>
      <h2 className="desc-info__location">Location</h2> <p>{location}</p>
      <h2 className="desc-info__date">Date</h2> <p>{date}</p>
      <h2 className="desc-info__description">Description</h2>
      <p>{description}</p>
    </div>
  );
}
