import React from "react";
import "./Navbar.css";

const Navbar = props => 
    // <h1 className="title jumbotron">{props.children}</h1>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="navbar-brand" href="/">Clicky Game</a>
              </li>
              <li className="nav-item active">Click an image to begin!</li>
              <li className="nav-item active">
                "Score: "
                "0"
                " | Top Score: "
                "0"
              </li>
            </ul>
          </div>
        </nav>
      </div>

export default Navbar;