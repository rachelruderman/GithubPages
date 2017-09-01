import React, {Component} from 'react';

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
            <div className='square about'>
              <div className='overlay'>
                {/* <img src='./user.png' alt='woman'/> */}
                <div>About Me</div>
              </div>
            </div>
            <div className='square services'>
              <div className='overlay'>
                <div>Services</div>
              </div>
            </div>
          </div>
          <div className='item right'>
            <div className='square portfolio'>
              <div className='overlay'>
                <div>Portfolio</div>
              </div>
            </div>
            <div className='square contact'>
              <div className='overlay'>
                <div>Contact</div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default LandingPage
