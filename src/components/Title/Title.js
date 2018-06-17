import React from "react";
import "./Title.css";

const Title = props => 
    <div className="title jumbotron message">
        {props.children}
        {/* <p>{props.children}</p> */}
    </div>

export default Title;