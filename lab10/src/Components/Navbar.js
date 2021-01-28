import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navList">
        <Link to="/">
          <button>Temperature</button>
        </Link>
        <Link to="distance">
          <button>Distance</button>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
