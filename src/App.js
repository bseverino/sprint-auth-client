import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './utils/PrivateRoute'

import Navigation from './components/Navigation'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import JokeList from './components/jokes/JokeList'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <PrivateRoute path='/jokes' component={JokeList} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
