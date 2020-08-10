import React from "react";
import "./App.css";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import tsParticlesConfig from "../data/tsParticles.json";
import ContactMe from "../components/ContactMe/ContactMe";
import Particles, { IParticlesParams } from "react-tsparticles";
import ContactForm from "../components/Form/ContactForm";

function App() {
  return (
    <div className='App'>
      <Particles
        className='particles'
        options={tsParticlesConfig as IParticlesParams}
      />
      <Profile />
      <Projects />
      <ContactForm />
      <ContactMe />
    </div>
  );
}

export default App;
