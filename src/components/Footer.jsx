import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import facebookAnimation from "../assets/animations/fb.json";
import instagramAnimation from "../assets/animations/innsta.json";
import twitterAnimation from "../assets/animations/X.json";
import linkedinAnimation from "../assets/animations/Linkedin.json";
import youtubeAnimation from "../assets/animations/yt.json";
import githubAnimation from "../assets/animations/github.json";

const Footer = () => {
  return (
    <div>
      <div className="footer mt-3">
        <div className="foot">
          <div className="footer-content">
            <div className="footlinks">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/get-involved">Donate</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="footlinks">
              <h4>Connect</h4>
              <div className="social">
                <a href="" target="_blank">
                  <Lottie animationData={facebookAnimation} />
                </a>
                <a href="" target="_blank">
                  <Lottie animationData={instagramAnimation} />
                </a>
                <a href="" target="_blank">
                  <Lottie animationData={twitterAnimation} />
                </a>
                <a href="" target="_blank">
                  <Lottie animationData={linkedinAnimation} />
                </a>
                <a href="" target="_blank">
                  <Lottie animationData={youtubeAnimation} />
                </a>
                <a href="" target="_blank">
                  <Lottie animationData={githubAnimation} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="end">
          <p>
            Tel: 0988-105-2888 | Email: support@mealmatters.com | Copyright ©
            2024 MealMatters | All Rights Reserved. <br />
            Website developed by: Vipin Kumar | Sanskar Sawane
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
