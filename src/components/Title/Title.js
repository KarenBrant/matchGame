import React from "react";
import "./Title.css";

const Title = props => 
    <h1 className="title jumbotron">{props.children}</h1>

export default Title;