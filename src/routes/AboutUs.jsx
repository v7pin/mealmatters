// AboutUs.jsx

import React from "react";
import vipinImage from "../assets/vipin1.jpeg";
import sanskarImage from "../assets/sanskar.jpeg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about bg-gradient-to-r from-black to-blue-900 w-full">
      <div className="main p-5 flex justify-around items-center">
        <div className="abt-text p-5">
          <h1 className="text-red-900 mb-10 text-7xl font-extrabold font-poppins" style={{ color: "#FC0050", fontWeight: "bold", fontFamily: "revert" , WebkitTextStroke: "2px black" , marginBottom: "40px"  }}>
            About <span className="text-white">Us </span> 
          </h1>
          <p className="text-white text-lg font-light mb-5">
            MealMatters is a food waste management system designed to reduce
            food wastage and use it in a useful way. This system also provides a
            platform for people to donate food. We are in contact with 150+
            banquets. We collect the donated food and distribute it among the
            people who really need it. This not only reduces food waste but also
            hunger, which is a major problem of the world. We believe nutritious
            food should go to people, not landfills.
          </p>
        </div>
        <div className="team">
          <h1 className="text-white mt-11 text-2xl font-extrabold font-poppins">
            Meet the <span style={{ color: "#FC0050", fontWeight: "bold", fontFamily: "revert" }}>Developers</span>
          </h1>
          <div className="team-member text-center m-5">
            <div className="team-member-photo w-48 h-48 overflow-hidden">
              <img
                src={vipinImage}
                alt="Vipin Kumar"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-base font-extrabold text-white mt-2">
              Vipin Kumar
            </h3>
            <div className="flex justify-center mt-2 items-center ">
              <a
                href="https://www.instagram.com/vipzzzn/"
                target="_blank"
                rel="noopener noreferrer"
                className=" mr-4 transform scale-105 hover:scale-110"
              >
                <FaInstagram className="text-2xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/v7pin/"
                target="_blank"
                rel="noopener noreferrer"
                className=" mr-4 transform scale-105 hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>
            </div>
          </div>
          <div className="team-member text-center m-5">
            <div className="team-member-photo w-48 h-48 overflow-hidden">
              <img
                src={sanskarImage}
                alt="Sanskar Sawane"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-base font-extrabold text-white mt-2">
              Sanskar Sawane
            </h3>
            <div className="flex justify-center mt-2 items-center">
              <a
                href="https://www.instagram.com/sawane_sanskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 transform scale-105 hover:scale-110"
              >
                <FaInstagram className="text-2xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanskar-sawane-671b46224/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 transform scale-105 hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
