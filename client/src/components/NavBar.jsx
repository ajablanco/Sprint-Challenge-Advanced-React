import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";


const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Change Theme</h1>
      <div className="dark-mode__toggle" id="toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid="toggle"
        />
      </div>
    </nav>
  );
};

export default NavBar;