import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
            <div className='item left'>
              Hi, I'm <div className='name'>Rachel Ruderman</div> Full-Stack Web Developer
              <br/><br/><br/><br/>
              <div className='icons'>
                <a href='https://www.linkedin.com/in/rachelruderman/' target='_blank'>
                  <img src='./linkedin.png' alt='linkedin logo'/>
                </a>
                <a href='https://github.com/rachelruderman' target='_blank'>
                  <img src='./github.png' alt='github logo'/>
                </a>
                <a href='https://twitter.com/rathelina' target='_blank'>
                  <img src='./twitter.png' alt='twitter logo'/>
                </a>
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
