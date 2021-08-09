import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav__container">
      <div className="nav__section">
        <span>Home</span>
      </div>
      <div className="nav__section">
        <span>Journal</span>
      </div>
      <div className="nav__section">
        <span>Goals</span>
      </div>
      <div className="nav__section">
        <span>Expense Tracker</span>
      </div>
      <div className="nav__section">
        <span>Sign In</span>
      </div>
    </div>
  );
}

export default Nav;
