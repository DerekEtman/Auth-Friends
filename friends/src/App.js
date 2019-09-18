import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';
import GetFriends from './components/GetFriends';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friends'>Friends?</Link>
          </li>
        </ul>
      </header>

      <body>

        <Switch>
          <PrivateRoute exact path='/friends' component={GetFriends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </body>
    </div>
  </Router>
  );
}

export default App;
