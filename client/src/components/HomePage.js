import React from 'react';
import { NavLink } from 'react-router-dom'
import homepageheader from './image/homepage-header.jpg'

function HomePage () {

    return (
        <>
        <div className="homepage-container">
            <img src={homepageheader} className="homepage-top-img"/>
            <div className="center">
                <h1 className="homepage-font"><i className="fa-solid fa-paw"></i> New York City’s Best Dog Park Activity App <i className="fa-solid fa-paw"></i></h1>
                <NavLink to='/signup' exact>
                    <button type="button" className="btn btn-primary btn-lg">Register Now</button>
                </NavLink>
            </div>
        </div>

        <div className="homepage-container" style={{height:"28rem", backgroundColor: "white"}}>
            <div style={{width: "50%", margin:"left"}}>
                <h3 style={{position: "absolute", top: "30%", padding:"3rem", paddingLeft: "7rem"}}>Check Out Dog Parks <i className="fa-solid fa-map-location-dot"></i></h3>
                <p style={{position: "absolute", top: "40%", padding:"3rem", paddingLeft: "7rem"}}>We have a list of NYC's dog parks! You can check their location and capability!</p>
                <p style={{position: "absolute", top: "45%", padding:"3rem",  paddingLeft: "7rem"}}>Is it too busy? Let's go to another park! (Don't forget to check out!)</p>
                <NavLink to='/dog_parks' exact>
                    <button type="button" className="btn btn-outline-secondary" style={{position: "absolute", top: "70%", left: "25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  float:"right"}}>
                <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="homepage-second-img"/>
            </div>
        </div>

        <div className="homepage-container" style={{height:"28rem", backgroundColor: "#F5F5F5"}}>
            <div style={{width: "50%", float:"right"}}>
                <h3 style={{position: "absolute", top: "30%", padding:"3rem", paddingLeft: "7rem"}}>See Zoomie Members <i className="fa-solid fa-dog"></i></h3>
                <p style={{position: "absolute", top: "40%", padding:"3rem", paddingLeft: "7rem"}}>Do you want to see our members? Check out this page!</p>
                <p style={{position: "absolute", top: "45%", padding:"3rem", paddingLeft: "7rem"}}>You can check our doggie's profiles and make sure if they are friendly or not.</p>
                <NavLink to='/dogs' exact>
                    <button type="button" className="btn btn-outline-secondary" style={{position: "absolute", top: "70%", right:"25%"}}>See more</button>
                </NavLink>
            </div>
            
            <div style={{width: "50%",  margin:"left"}}>
                <img src="https://img1.10bestmedia.com/Images/Photos/379272/GettyImages-104489865_54_990x660.jpg" className="homepage-second-img"/>
            </div>
        </div>
        </>
    )
    
}

export default HomePage