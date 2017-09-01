import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import LandingPage from './components/landing'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
