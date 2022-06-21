import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    }
  }, [user])
  
  console.log(user)

  console.log(isLoggedIn)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          Cookies.set('user_id', user.id)
          setUser(user)
        });
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setIsLoggedIn(false)
        setUser(null);
      }
    });
  }

  return (
    <div className="App">
      <NavBar setUser={setUser} handleLogoutClick={handleLogoutClick}/>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/signup'>
          <SignUp setUser={setUser}/>
        </Route>
        <Route exact path='/login'>
          <LogIn setUser={setUser} user={user} isLoggedIn={isLoggedIn}/>
        </Route>
        <Route exact path='/dog_parks'>
          <DogParkContainer />
        </Route>
        <Route exact path='/profile'>
          <Profile user={user} setUser={setUser}/>
        </Route>
        <Route exact path='/dogs'>
          <DogContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
