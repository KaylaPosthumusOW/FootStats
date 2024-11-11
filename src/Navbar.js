import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import logo from './FootStats Logo Design-01.png';

function Navbar() {
  return (
    // Container
    <div className="nav-background">
      <img src={logo} className="logo" alt="logo" />

      <ul className="nav-links">
        <li className="nav-link"> 
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-link"> 
          <Link to="/Comparison" className="nav-link">Comparison</Link>
        </li>
        <li className="nav-link"> 
          <Link to="/Timeline" className="nav-link">Timeline</Link>
        </li> 
      </ul>
    </div>
  );
}

export default Navbar;

