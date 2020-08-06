import React from 'react';
import './App.css';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects/Projects';
import tsParticlesConfig from '../data/tsParticles.json';
import ContactMe from '../components/ContactMe/ContactMe';
import Particles from 'react-tsparticles';

function App() {
  return (
    <div className='App'>
      <Particles id='tsparticles' className='particles' options={tsParticlesConfig} />
      <Profile />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
