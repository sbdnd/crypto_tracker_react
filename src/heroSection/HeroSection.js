import React from "react";
import "./HeroSection.css";
import video from "../videos/video-3.mp4";
import { Link } from "react-router-dom";
import { FiPlayCircle } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="hero-title">
        <h1 className="sign">
          <span className="sign-span">
            <span className="fast-flicker">C</span>RYPTO
          </span>
          <span className="sign-span">-</span>
          <span className="sign-span">
            <span className="flicker">T</span>
            RACKER
          </span>
        </h1>
        <Link to="/coins" className="hero-link">
          <button id="neonShadow" className="btn-1">
            Get Started
          </button>
          <button id="neonShadow" className="btn-2">
            <FiPlayCircle class="bit" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
