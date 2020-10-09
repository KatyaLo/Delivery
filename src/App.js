import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import Delivery from './Delivery.js';
import Client from './Client.js'
import Courier from './Courier.js'
import Calc from './Calculation.js'
import './App.css';

import {
    Route,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"
//class extends React.Component
function App(props) {
  // render() {
    const [currentTime, setCurrentTime] = useState(0);
    const { history } = props;

    useEffect(() => {
      fetch('venv/api/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
        console.log(data.time)
      });
    }, []);


    return (
      <div className="App">
          <Switch>
            <Route history={history} path='/login' component={Login}/>
            <Route history={history} path='/delivery' component={Delivery}/>
            <Route history={history} path='/client' component={Client}/>
            <Route history={history} path='/courier' component={Courier}/>
            <Route history={history} path='/calc' component={Calc}/>

            <Redirect from='/' to='/delivery'/>
          </Switch>
        
      </div>
    );
    
  // }
}

export default withRouter(App);
