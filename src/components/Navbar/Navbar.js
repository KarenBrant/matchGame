import React from "react";
import "./Navbar.css";

const Navbar = props =>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
    <div className="row">
            <ul className="navbar-nav">
            <div className="col-md-4">
                <li className="nav-item active">
                    <a className="navbar-brand" href="/">Clicky Game</a>
                </li>
            </div>
            <div className="col-md-4">
                <li className="nav-item active">Click an image to begin!</li>
            </div>
            <div className="scoreSummary col-md-4">
                <li className="nav-item active">
                    {props.children}
                </li>
            </div>
            </ul>
    </div>
</div>
 </nav>

export default Navbar;