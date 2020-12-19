import React from "react";
import "./HeroSection.css";
import video from "./videos/video-3.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="hero-title">
        <h1>CRYPTO - TRACKER</h1>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
