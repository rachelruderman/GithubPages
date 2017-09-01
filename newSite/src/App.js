import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import LandingPage from './views/landingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Redirect to='/'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
