import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
            <div className='item left'>
              Hi, I'm <div className='name'>Rachel Ruderman</div> <span className='caption'>Full-Stack Web Developer</span>
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
              <div className='square about'>item 1</div>
              <div className='square portfolio'>item 2</div>
            </div>
            <div className='item right'>
              <div className='square services'>item 3</div>
              <div className='square contact'>item 4</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
