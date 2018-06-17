import React from "react";
import "./AnimalCard.css";

const AnimalCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      {/* <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul> */}
    </div>
    onClick={() => props.removeImage(props.id)}
  </div>
);

export default AnimalCard;
