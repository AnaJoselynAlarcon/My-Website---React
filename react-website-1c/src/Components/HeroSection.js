import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/intro.mov" autoPlay loop muted />
      <h1> HOLAAAAAA</h1>
      <p> I'm so happy you're here!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          <a
            href="https://www.linkedin.com/in/anajoselynalarcon/"
            target="_blank"
            rel="noopener noreferrer">
            LET'S CONNECT
          </a>
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large">
          <a
            href="https://www.youtube.com/watch?v=eOyINPApn60"
            target="_blank"
            rel="noopener noreferrer">
            WATCH VIDEO INTRO <i className="far fa-play-circle" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
