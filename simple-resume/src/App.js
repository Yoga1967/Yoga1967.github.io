import React, { Component } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Bottom from './Components/Bottom';
import { Helmet } from 'react-helmet';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="container">
              <Helmet>
                  <title>Simple Resume | Eka Prayoga</title>
              </Helmet>
            <Header />
            <Home />
              <About />
            <Bottom />
          </div>
    </div>
  );
}

export default App;
