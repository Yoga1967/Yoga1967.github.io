import React, { Component } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Bottom from './Components/Bottom';
import TopButton from './Components/BackToTop';
import { Helmet } from 'react-helmet';
import { Conductor, Animated } from 'conductor-animate';
import { Fade } from 'conductor-animate/animations';
import 'animate.css';
import './reset.css';
import './App.css';

// Define the Animation mapping
const animations = { Fade };

// Define the configuration
const config = {
    "HeaderSection": {
        animation: 'Fade',
        duration: 500,
        delay: 200,
    },
};


function App() {
  return (
      <div className="App">
          <Conductor animations={animations} config={config}>
              <Animated id="HeaderSection">
                  <div className="container">
                      <Helmet>
                          
                      </Helmet>
                      <Header />
                      <Home name="Eka Prayoga"
                            jobTitle="Web Administrator / Frontend Web Developer"
                            skills="HTML, CSS, and Javascript"
                            newSkill="ReactJS"
                            newSkillAs="library" />
                      <About />
                      <Bottom />
                      <TopButton/>
                  </div>
              </Animated>
          </Conductor>
    </div>
  );
}

export default App;
