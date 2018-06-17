import React from "react";
import "./Instructions.css";

const Instructions = props => 
    <p className="lead jumbotron">{props.children}</p>

export default Instructions;