import React, { Component } from 'react';

export default class Home extends Component {

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
            image:  'about1-grayscale.jpeg',
        },
        {
            name:   'service',
            title:  'Services',
            icon:   'ion-ios-lightbulb-outline hidden-xs',
            image:  'service.jpg',
        },
        {
            name:   'portfolio',
            title:  'Portfolio',
            icon:   'ion-ios-briefcase-outline hidden-xs',
            image:  'portfolio.jpg',
        },
        {
            name:   'contact',
            title:  'Contact',
            icon:   'ion-ios-email-outline hidden-xs',
            image:  'contact.jpg',
        },
    ];

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
                          return <a key={title} href={href} className={icon} rel="noopener noreferrer" title={title} target='_blank'/>
                      })}
                  </div>
              </div>
          </div>
      )
  };

  renderNavigation = () => {
      return (
          <div className="four_nav_item menu">
              {this.navItems.map(navItem => {

                  const {title, image, icon, name}  = navItem;
                  const backgroundImage             = `url('img/${image}')`;
                  const onClick                     = () => this.props.history.push(`/${name}`);

                  return (
                      <div key={name} className={`${name}-btn menu_button`} onClick={onClick}>
                          <div className="mask" style={{backgroundImage}}/>
                          <div className="heading">
                              {icon ? <i className={icon}/> : <><br/><br/><br/></>}
                              <h2>{title}</h2>
                          </div>
                      </div>
                  )
              })}
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