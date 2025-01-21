import React from "react";
import { ReactTyped as Typed } from "react-typed"; // Correctly import react-typed
import "./HeroSection.css";
import profilePhoto from "./data/propic.jpg"; // Replace with your profile photo path
import resume from "./data/my_resume.pdf"; // Replace with your resume file path


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1 className="inter-hello">Hello, I'm</h1>
        <h2>
          <span className="highlight">Bhagya</span> Ekanayake
        </h2>
        <h3 className="inter-interested">Who is interested in</h3>
        <Typed
        className="inter-animation-text"
          strings={[
            "UI/UX",
            "Networking",
            "Cloud Computing",
            "AI",
            "Front-End Development",
            "Full Stack Development",
            "QA",
            "Cyber Security",
            "Machine Learning",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <div className="resume-btn-container">
          <a href={resume} download="Bhagya_Ekanayake_Resume.pdf" className="btn">
            Resume
          </a>
        </div>
        
      </div>
      <div className="hero-image">
        <img src={profilePhoto} alt="Bhagya Ekanayake" />
      </div>
    </section>
    
  );
}

export default HeroSection;
