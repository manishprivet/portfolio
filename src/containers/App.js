import React from 'react';
import './App.css';
import Profile from '../components/Profile/Profile'
import Projects from '../components/Projects/Projects'
import Particles from 'react-particles-js';
import {particle1} from '../data/Particles'
import ContactMe from '../components/ContactMe/ContactMe';


function App() {
  return (
    <div className="App">
      <Particles params = {particle1} className='particles' />
      <Profile />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
