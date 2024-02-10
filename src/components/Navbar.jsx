import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
          <nav>
            <img
              src="./logo.png"
              className="logo"
              alt="Logo"
              title="MealMatters"
            />

            <ul className="navbar">
              <li>
                <RouterLink
                  to="/main-home#hero-section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ cursor: "pointer" }} 
                >
                  Home
                </RouterLink>
                <ScrollLink
                  to="what-we-do"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70} 
                  style={{ cursor: "pointer" }}
                >
                  What We Do
                </ScrollLink>
                <RouterLink  to="/get-involved">Get Involved</RouterLink>
                <RouterLink to="/about-us">About Us</RouterLink>
                <RouterLink to="/contact-us">Contact Us</RouterLink>
              </li>
            </ul>
          </nav>

          
        </div>
  );
};

export default Navbar;
