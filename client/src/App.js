import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.js'
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import DogParkContainer from './components/DogParkContainer.js'
import DogContainer from './components/DogContainer.js'
import Profile from './components/Profile.js'
import NavBar from './components/NavBar.js'

function App() {
  const [user, setUser] = useState(null)
  console.log(user)

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <LogIn setUser={setUser}/>
        </Route>
        <Route exact path='/dog_parks'>
          <DogParkContainer />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/dogs'>
          <DogContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
