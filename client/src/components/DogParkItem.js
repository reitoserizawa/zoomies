import React from 'react'
import {Link} from "react-router-dom";
import './DogParkItem.css'


function DogParkItem ({name, address, image, login, id, count, isCheckedIn}) {
    let activeness
    
    if (count > 0 && count <= 7) {
       activeness = "not busy"
    } else if ( count > 7 && count <= 12 ) {
        activeness = "busy"
    } else if(count > 12) {
        activeness = "very busy"
    } else {
        activeness = 'empty'
    }

    console.log(isCheckedIn)
    const viewButton = isCheckedIn ? "View" : "Check In"

    return (
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
            <img src={image} class="card-img-top" alt="Dog Park Pitcure"/>
                <div class="card-body text-center">
                    <small>This dog park is <em>{activeness}</em></small>
                    <h5 class="card-title mb-0" >{name}</h5>
                    <div class="card-text text-black-50">
                        <span style={{fontSize:"90%"}}><i class="fa-solid fa-location-dot"></i> {address}</span>
                    </div>
                    
                    <hr/>
                    
                    {login ? 
                    <Link to={`/dog_parks/${id}`}>
                        <button type="button" class="btn btn-outline-info">{viewButton}</button> 
                    </Link>
                    : 
                    <Link to={`/login`}>
                    <button type="button" class="btn btn-outline-info">Please log in</button>
                    </Link>
                    }
                    
                </div>
            </div>
      </div>
    )
}

export default DogParkItem