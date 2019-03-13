import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import './style/index.scss';
import './style/ionicons.min.css';
import './style/magnific-popup.css';
import './style/style.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>


            <Route exact path='/'             component={ Home } />
            {/*<Route path='/getting-started'     component={ RequireAuth(GettingStarted) } />*/}
            {/*<Route path='/moving-from'         component={ RequireAuth(MovingFrom) } />*/}
            <Redirect to='/'/>

        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
