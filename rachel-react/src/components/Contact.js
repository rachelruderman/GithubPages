import React, { Component } from 'react';

export default class Contact extends Component {

    socialMediaLinks = [
        {
            title:  'Twitter',
            href:   'https://twitter.com/rathelina',
            icon:   'fab fa-twitter fa-lg'
        },
        {
            title:  'LinkedIn',
            href:   'https://www.linkedin.com/in/rachelruderman',
            icon:   'fab fa-linkedin-in fa-lg'
        },
        {
            title:  'GitHub',
            href:   'https://github.com/rachelruderman',
            icon:   'fab fa-github fa-lg'
        }
    ];

    navItems = [
        {
            name:   'about',
            title:  'About Me',
            icon:   '',
            backgroundImage:  '',
        }
    ];

  componentDidMount = () => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
  };

  renderIntroduction = () => {
      return (
          <div className="introduction text_logo_intro">
              <div className="intro-content">
                  <h1>Hey there, I'm</h1>
                  <span>Rachel</span>
                  <p className="slogan-text">full-stack web developer</p>

                  <div className="social-media">
                      {this.socialMediaLinks.map(socialMediaLink => {
                          const {title, href, icon} = socialMediaLink;
                          return <a key={title} href={href} className={icon} data-toggle='tooltip' title={title} target='_blank'/>
                      })}
                  </div>
              </div>
          </div>
      )
  };

  renderNavigation = () => {
      return (
          <div className="four_nav_item menu">
              {/*{this.navItems.map(navItem => {*/}
                  {/*const {title, backgroundImage, icon, name} = navItem;*/}
                  {/*return (*/}
                      {/*<div data-url_target={name} className={`${name}-btn menu_button`}>*/}
                          {/*<div className="mask" style={{backgroundImage}}/>*/}
                          {/*<div className="heading">*/}
                              {/*{icon ? <i className={icon}/> : <><br/><br/><br/></>}*/}
                              {/*<h2>{title}</h2>*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*)*/}
              {/*})}*/}
              <div data-url_target="about" className="profile-btn menu_button">
                  <div className="mask" style={{backgroundImage: `url('img/about1.gif')`}}/>
                  <div className="heading">
                      <br/><br/><br/>
                      <h2>About Me</h2>
                  </div>
              </div>


              <div data-url_target="service" className="service-btn menu_button">
                  <div className="mask" style={{backgroundImage: `url('img/service.jpg')`}}/>
                  <div className="heading">
                      <i className="ion-ios-lightbulb-outline hidden-xs"/>
                      <h2>Services</h2>
                  </div>
              </div>

              <div data-url_target="portfolio" className="portfolio-btn menu_button">
                  <div className="mask" style={{backgroundImage: `url('img/portfolio.jpg')`}}/>
                  <div className="heading">
                      <i className="ion-ios-briefcase-outline hidden-xs"/>
                      <h2>Portfolio</h2>
                  </div>
              </div>

              <div data-url_target="contact" className="contact-btn menu_button">
                  <div className="mask" style={{backgroundImage: `url('img/contact.jpg')`}}/>
                  <div className="heading">
                      <i className="ion-ios-email-outline hidden-xs"/>
                      <h2>Contact</h2>
                  </div>
              </div>
          </div>
      )
  };

  render() {
    return (
        <div className="home-page">
            {this.renderIntroduction()}
            {this.renderNavigation()}
        </div>
    );
  }
}