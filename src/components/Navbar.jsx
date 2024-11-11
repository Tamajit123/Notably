
import { useState } from "react";
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { Sun,Moon } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({toggleDarkMode}) => {
  const [isDarkMode , setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  }
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
      <button 
      onClick={toggleTheme} className="text-white font-medium text-xl">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Dark Mode Button */}
      <button onClick = {toggleDarkMode} className="flex items-center">
          {isDarkMode ? (
            <Sun className = "text-yellow-500" size = {24} /> 
          ) : (
            <Moon className = "text-gray-800" size = {24} />
          )}


        </button>
    </div>
  );
};
Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};


export default Navbar;
