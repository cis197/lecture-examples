import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import Login  from './Login';
import AuthHOC from './AuthHOC';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Link to='/about'> About </Link>
            <Link to='/search'> Search </Link>
            <Link to='/login'> Login </Link>
            <Switch>
              <Route path="/about" component={AuthHOC(About)}/>
              <Route path="/search/:username?" component={AuthHOC(Profile)}/>
              <Route path="/login" component={Login}/>
              <Route component={About}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
