import {Link} from 'react-router-dom'
import HomePage from './HomePage.js'
import DogContainer from './DogContainer.js'

function NavBar() {
  return (
    <div>
        <Link exact to='/'>
            Home
        </Link>
        <Link to='/dogs'>
            Explore Dogs
        </Link>
        <Link to='/dog_parks'>
            Dog Parks
        </Link>
        <Link to='/profile'>
            My Profile
        </Link>
        <Link to='login'>
            Login
        </Link>
        <Link to='signup'>
            Register
        </Link>
    </div>
  )
}

export default NavBar