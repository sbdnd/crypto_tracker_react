import React from "react";
import "./HeroSection.css";
import video from "./videos/video-3.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="hero-title">
        <h1>CRYPTO - TRACKER</h1>
        <Link to="/started" className="hero-link">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
