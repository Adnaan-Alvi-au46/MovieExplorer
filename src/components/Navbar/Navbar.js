import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useGeneralStore } from "../../store/useGeneralStore";

function Navbar() {
  const { darkMode, toggleDarkMode } = useGeneralStore();

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">Movie Hub</Link>
      </h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
