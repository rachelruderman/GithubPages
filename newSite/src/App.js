import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Link} from 'react-router-dom';
import LandingPage from './views/landingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
