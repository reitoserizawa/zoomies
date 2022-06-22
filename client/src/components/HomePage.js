import React from 'react';
import { NavLink } from 'react-router-dom'
import homepageheader from './image/homepage-header.jpg'

function HomePage () {

    return (
        <>
        <div className="homepage-container">
            <img src={homepageheader} alt="Dog" className="homepage-top-img"/>
            <div className="center">
                <h1 className="homepage-font"><i className="fa-solid fa-paw"></i> New York City’s Best Dog Park Activity App <i className="fa-solid fa-paw"></i></h1>
                <NavLink to='/signup' exact>
                    <button type="button" className="btn btn-primary btn-lg">Register Now</button>
                </NavLink>
            </div>
        </div>

        <div className="homepage-container" style={{height:"28rem", backgroundColor: "white"}}>
            <div style={{width: "50%", margin:"left"}}>
                <h3 style={{position: "absolute", top: "30%", left:"15%"}}>Check Out Dog Parks <i className="fa-solid fa-map-location-dot"></i></h3>
                <p style={{position: "absolute", top: "40%", left:"15%"}}>We have a list of NYC's dog parks! You can check their location and capability!</p>
                <p style={{position: "absolute", top: "45%", left:"15%"}}>Check in and see which doggies are there.</p>
                <p style={{position: "absolute", top: "50%", left:"15%"}}>Is it too busy? Let's go to another park!</p>
                <NavLink to='/dog_parks' exact>
                    <button type="button" className="btn btn-outline-secondary" style={{position: "absolute", top: "70%", left: "25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  float:"right"}}>
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Dog" className="homepage-second-img"/>
            </div>
        </div>

        <div className="homepage-container" style={{height:"28rem", backgroundColor: "#F5F5F5"}}>
            <div style={{width: "50%", float:"right"}}>
                <h3 style={{position: "absolute", top: "30%", right:"15%"}}>See Zoomie Members <i className="fa-solid fa-dog"></i></h3>
                <p style={{position: "absolute", top: "40%", right:"15%"}}>Do you want to see our members? Check out this page!</p>
                <p style={{position: "absolute", top: "45%", right:"15%"}}>You can check our doggie's name and bio.</p>
                <p style={{position: "absolute", top: "50%", right:"15%"}}>Maybe you can also leave a comment!?</p>
                <NavLink to='/dogs' exact>
                    <button type="button" className="btn btn-outline-secondary" style={{position: "absolute", top: "70%", right:"25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  margin:"left"}}>
                <img src="https://img1.10bestmedia.com/Images/Photos/379272/GettyImages-104489865_54_990x660.jpg" alt="Dog" className="homepage-second-img"/>
            </div>
        </div>
        </>
    )
    
}

export default HomePage