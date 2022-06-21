import React from 'react';
import { NavLink } from 'react-router-dom'
import homepageheader from './image/homepage-header.jpg'

function HomePage () {

    return (
        <>
        <div class="homepage-container">
            <img src={homepageheader} class="homepage-top-img"/>
            <div class="center">
                <h1 class="homepage-font"><i class="fa-solid fa-paw"></i> New York City’s Best Dog Park Activity App <i class="fa-solid fa-paw"></i></h1>
                <NavLink to='/signup' exact>
                    <button type="button" class="btn btn-primary btn-lg">Register Now</button>
                </NavLink>
            </div>
        </div>

        <div class="homepage-container" style={{height:"28rem", backgroundColor: "white"}}>
            <div style={{width: "50%", margin:"left"}}>
                <h3 style={{position: "absolute", top: "30%", padding:"3rem", paddingLeft: "7rem"}}>Check Out Dog Parks <i class="fa-solid fa-map-location-dot"></i></h3>
                <p style={{position: "absolute", top: "40%", padding:"3rem", paddingLeft: "7rem"}}>We have a list of NYC's dog parks! You can check their location and capability!</p>
                <p style={{position: "absolute", top: "45%", padding:"3rem",  paddingLeft: "7rem"}}>Is it too busy? Let's go to another park! (Don't forget to check out!)</p>
                <NavLink to='/dog_parks' exact>
                    <button type="button" class="btn btn-outline-secondary" style={{position: "absolute", top: "70%", left: "25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  float:"right"}}>
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="homepage-second-img"/>
            </div>
        </div>

        <div class="homepage-container" style={{height:"28rem", backgroundColor: "#F5F5F5"}}>
            <div style={{width: "50%", float:"right"}}>
                <h3 style={{position: "absolute", top: "30%", padding:"3rem", paddingLeft: "7rem"}}>See Zoomie Members <i class="fa-solid fa-dog"></i></h3>
                <p style={{position: "absolute", top: "40%", padding:"3rem", paddingLeft: "7rem"}}>Do you want to see our members? Check out this page!</p>
                <p style={{position: "absolute", top: "45%", padding:"3rem", paddingLeft: "7rem"}}>You can check our doggie's profiles and make sure if they are friendly or not.</p>
                <NavLink to='/dogs' exact>
                    <button type="button" class="btn btn-outline-secondary" style={{position: "absolute", top: "70%", right:"25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  margin:"left"}}>
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="homepage-second-img"/>
            </div>
        </div>
        </>
    )
    
}

export default HomePage