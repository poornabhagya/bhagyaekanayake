import React from 'react';
import Header from './components/header';
import HeroSection from './HeroSection';
import AboutMeSection from "./AboutMeSection"; 
import ProjectSection from "./ProjectSection";
import TechnicalSkills from './components/TechnicalSkills';
import Footer from "./footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main style={{ marginTop: '70px', padding: '20px' }}>
      <HeroSection />
      <AboutMeSection/>
      <ProjectSection />
      <TechnicalSkills />
      <hr className="divider-line" />
      <Footer />
      
      </main>
      
    </div>
    
    
  
  );
}

export default App;