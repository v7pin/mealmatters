import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="home flex items-center justify-center" id="hero-section">
      <div className="banner relative" style={{filter: "brightness(0.5)"}}>
        <img src="./bg.jpg" />
      </div>

      <div className="title text-center absolute top-4">
        <h1 className="" >MealMatters</h1>
        <p className="font-montserrat">
          “If you’re throwing away food, you’re throwing away life.” – Anthony
          Bourdain
        </p>
        <Link to="/get-involved" className="button">
          Donate Food!
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
