import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DropdownHambuger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef(null);

  const handleHomeClick = () => {
    if (location.pathname === "/myportfolio") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-hamburger" ref={dropdownRef}>
      <div
        className="dropdown-hamburger__btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {isOpen && (
        <div className="dropdown-hamburger__links">
          <ul>
            <li className="dropdown-hamburger__link">
              <Link to="/myportfolio" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="dropdown-hamburger__link">
              <a href="#skills">Skills</a>
            </li>
            <li className="dropdown-hamburger__link">
              <a href="#project">Projects</a>
            </li>
            <li className="dropdown-hamburger__link border-bottom">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownHambuger;
