import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTimes,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import "./css/Navbar.css";

function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton() 
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FontAwesomeIcon id="faFilm" icon={faFilm} />
            <span style={{ color: "#F6C20A" }}>CINE</span>
            <span style={{ color: "white" }}>MAGIC</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={click ? faTimes : faBars}
              id={click ? "id-faTimes" : "id-faBars"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-page"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login-container"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
