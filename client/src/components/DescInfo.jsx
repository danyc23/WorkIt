import React from 'react'

export default function DescInfo(props) {
    let {title, location, date, description} = props.info;
    return (
        <div>
        <h2>Title</h2> <p>{title}</p>
        <h2>Location</h2> <p>{location}</p>
        <h2>Date</h2> <p>{date}</p>
        <h2>Description</h2> <p>{description}</p>
        </div>
    )
}
