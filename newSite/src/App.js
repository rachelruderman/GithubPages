import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
            <div className='item left'>
              Hi, I'm <div>Rachel Ruderman</div>
              <div className='icons'>
                <img src='./linkedin.png' alt='linkedin logo'/>
                <div>GitHub</div>
              </div>
            </div>
            <div className='item right'>
              right flex item
            </div>
        </div>
      </div>
    );
  }
}

export default App;
