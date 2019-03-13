import React, { Component } from 'react';
import PageWrapper from "./PageWrapper";

export default class About extends Component {

    renderContent = () => {
        return (
            <div>
                <div>
                    <h2 className="small-heading">TRANSLATOR => DEVELOPER</h2>
                    <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="video embed-responsive embed-responsive-4by3">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/t9sD-5tOx9A" allowFullScreen/>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="about-me-desc">
                                    <p className='tagline'>
                                        TRANSLATOR TURNED DEVELOPER
                                    </p>
                                    <div className='bio'>
                                        <p>
                                            After spending 5 years in Barcelona, Spanish and Catalan had become second nature to me. For a translator you might imagine this to be the ultimate success, but there was one noticeable drawback: the mental challenge was gone.
                                        </p>
                                        <p>
                                            In 2017 I enrolled in LEARN Academy’s JavaScript Bootcamp and it's safe to say the mental challenge is back! While human languages take centuries to evolve, programming languages are constantly on the move – and that’s exactly what I love about coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="clearfix">
                        <h2 className="small-heading">STREET CRED</h2>
                        <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                            <div className="row">
                                <blockquote><div className='quote'>Rachel is a talented and dedicated junior developer with a ravenous drive for learning and a passion for what she does. I've watched her pick up, and become proficient with, new technologies at an astounding rate and when given a project, she has consistently gone above and beyond the requirements. She would be a great asset to any team and I have the utmost confidence in, and enthusiastically, endorse her!</div>
                                    - <a href='https://www.linkedin.com/in/ericnorcross/' target='_blank' rel="noopener noreferrer" >
                                        Eric Norcross
                                    </a>, Owner | Full-Stack Developer @
                                    <a href='http://www.base10creations.com/' target='_blank' rel="noopener noreferrer" >
                                        base10 Creations, LLC.
                                    </a>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix">
                        <h2 className="small-heading">EDUCATION</h2>
                        <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
                            <div className="row">
                                <div className="services col-md-4  col-xs-12">
                                    <a href='https://www.learnacademy.org/' target='_blank'>
                                        <div className="facts">
                                            <div className="facts-overlay">
                                                <i className="fa fa-code fa-3x"/>
                                                <p className="count">2017</p>
                                                <p className="text-capitalize">LEARN Academy JavaScript Bootcamp</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="services col-md-4  col-xs-12">
                                    <a href='https://www.youracclaim.com/badges/46c296df-8b13-4eb1-a30e-ec1ab6c80028' target='_blank' rel="noopener noreferrer" >
                                        <div className="facts">
                                            <div className="facts-overlay">
                                                <i className="fa fa-cogs fa-3x"/>
                                                <p className="count">2017</p>
                                                <p className="text-capitalize">Project Management Professional</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                                <div className="services col-md-4  col-xs-12">
                                    <a href='http://lalis.richmond.edu/major-minor/index.html' target='_blank' rel="noopener noreferrer" >
                                        <div className="facts">
                                            <div className="facts-overlay">
                                                <i className="fa fa-graduation-cap fa-3x"/>
                                                <p className="count">2012</p>
                                                <p>University of Richmond, BA</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                    </div>



                </div>
                    </div>
            </div>
        )
    }
  render() {
    return (
        <PageWrapper image={'about2.gif'} title={'About Me'}>
            {this.renderContent()}
        </PageWrapper>
    );
  }
}