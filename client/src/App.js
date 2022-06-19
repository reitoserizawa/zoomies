import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import DogParkContainer from './components/DogParkContainer'
import DogContainer from './components/DogContainer'
import Profile from './components/Profile'
import NavBar from './components/NavBar'

function App() {
  const [username, setUsername] = useState("")

  return (
    <div className="App">
      <NavBar login={username}/>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <LogIn />
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
