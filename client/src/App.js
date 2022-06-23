import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import './App.css';
import HomePage from './components/HomePage.js'
import SignUp from './components/SignUp.js'
import LogIn from './components/LogIn.js'
import DogParkContainer from './components/DogParkContainer.js'
import DogContainer from './components/DogContainer.js'
import Profile from './components/Profile.js'
import NavBar from './components/NavBar.js'
import AddDogForm from './components/AddDogForm.js';
import DogProfile from './components/DogProfile.js'

import CheckIn from './components/CheckIn'

function App() {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [dogs, setDogs] = useState([])
  const [updatedDogs, setUpdatedDogs] = useState(dogs)
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const history = useHistory()

  useEffect(() => {
    setUpdatedDogs(dogs)
  }, [dogs])

  useEffect(() => {
      fetch("/dogs")
      .then(r => r.json())
      .then(dogs => setDogs(dogs))
  }, [])

  // useEffect(() => {
  //   if (user) {
  //     setIsLoggedIn(true)
  //   }
  // }, [user])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // Cookies.set('user_id', user.id)
          setUser(user)
          setIsLoggedIn(true)
          user.check_ins.length === 0 ? setIsCheckedIn(false) : setIsCheckedIn(true)
        });
      }
    });
  }, [updatedDogs]);

  console.log(`is checked in? ${isCheckedIn}`)

  // useEffect(() => {
  //   const validateUser = async () => {
  //     let req = await fetch("/me")
  //     if (req.ok) {
  //       req.json().then((user) => {
  //         // Cookies.set('user_id', user.id)
  //         setUser(user)
  //         setIsLoggedIn(true)
  //       });
  //     }
  //   }
  // })

  // useEffect(() => {
  //   //console.log(“it’s happening”)
  //   const validateUser = async () => {
  //     let req = await fetch(“/validate_user”);
  //     if (req.ok) {
  //       setUser(await req.json());
  //     } else {
  //       handleLogin(false);
  //       history.push(“/login”);
  //     }
  //   }
  // })

  // 
  console.log(user)

  // 

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setIsLoggedIn(false)
        setUser(null);
        history.push('/login')
      }
    });
  }

  const handleAddDog = (newDog) => {
    setUpdatedDogs([...updatedDogs, newDog])
  }

  const handleDeleteDog = (deletedDog) => {
    const filteredDogs = updatedDogs.filter((dog) => deletedDog.id !== dog.id)
    setUpdatedDogs(filteredDogs)
  }

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick}/>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/signup'>
          <SignUp setUser={setUser} setIsCheckedIn={setIsCheckedIn}/>
        </Route>
        <Route exact path='/login'>
          <LogIn setUser={setUser} user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsCheckedIn={setIsCheckedIn}/>
        </Route>
        <Route exact path='/dog_parks'>
          <DogParkContainer isLoggedIn={isLoggedIn} isCheckedIn={isCheckedIn} user={user}/>
        </Route>
        <Route exact path="/dog_parks/:id">
          <CheckIn user={user} setIsCheckedIn={setIsCheckedIn}/>
        </Route>
        <Route exact path='/profile'>
          <Profile user={user}/>
        </Route>
        <Route exact path='/dogs'>
          <DogContainer dogs={updatedDogs}/>
        </Route>
        <Route exact path='/add_dog'>
          <AddDogForm user={user} handleAddDog={handleAddDog}/>
        </Route>
        <Route path='/dogs/:id'>
          <DogProfile user={user} handleDeleteDog={handleDeleteDog} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
