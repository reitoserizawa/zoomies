import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar ({login}) {

    let buttons

    if (login) {        
        buttons = <>
            <NavLink to='/profile' exact>
                <button class="btn btn-outline-primary my-2 my-sm-0" style={{margin: "1rem"}} type="submit">Profile</button>
            </NavLink>
            <NavLink to='/logout' exact>
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Log Out</button>
            </NavLink>
            </>
    } else {
        buttons = <>
            <NavLink to='/login' exact>
                <button class="btn btn-outline-primary my-2 my-sm-0" style={{margin: "1rem"}} type="submit">Log In</button>
            </NavLink>
            <NavLink to='/signup' exact>
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Register</button>
            </NavLink>
            </>
    }

    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <NavLink to='/' exact>
                    <a class="navbar-brand" href="/"><i class="fa-solid fa-paw"></i> Zoomies</a>
                </NavLink>

                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <NavLink to='/dog_parks' style={{ textDecoration: 'none' }} exact>
                        <li class="nav-item">
                            <a class="nav-link" href="/dog_parks">Dog Parks</a>
                        </li>
                    </NavLink>
                    
                    <NavLink to='/dogs' style={{ textDecoration: 'none' }} exact>
                        <li class="nav-item">
                            <a class="nav-link" href="/dog_parks">Our Dogs</a>
                        </li>
                    </NavLink>
                </ul>
                
                <form class="form-inline my-2 my-lg-0">


                    {/* <NavLink to='/login' exact>
                        <button class="btn btn-outline-primary my-2 my-sm-0" style={{margin: "1rem"}} type="submit">Log In</button>
                    </NavLink>

                    <NavLink to='/signup' exact>
                        <button class="btn btn-primary my-2 my-sm-0" type="submit">Register</button>
                    </NavLink> */}
                    {buttons}
                    
                </form>
  </div>
</nav>
    )
}

export default NavBar