import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom';

class LandingPage extends Component {
  render(){
    return (
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
            <Link className='square about' to='/about'>
              <div className='overlay'>
                <div>About Me</div>
              </div>
            </Link>
            <Link className='square services' to='/services'>
              <div className='overlay'>
                <div>Services</div>
              </div>
            </Link>
          </div>
          <div className='item right'>
            <Link className='square portfolio' to='/portfolio'>
              <div className='overlay'>
                <div>Portfolio</div>
              </div>
            </Link>
            <Link className='square contact' to='/contact'>
              <div className='overlay'>
                <div>Contact</div>
              </div>
            </Link>
          </div>
      </div>
    )
  }
}

export default LandingPage
