import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
  return (
    <>
        {/* <p>SkyWatcher</p> */}
        <div className="nav-container">
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/allsky">AllSky</NavLink>
            <NavLink to="/sqm">SQM</NavLink>
            <NavLink to="weather-cam">Weather</NavLink>
        </div>
    </>
  )
}

export default Header;
