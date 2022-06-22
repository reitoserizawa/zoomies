import React from 'react'

function DogParkItem ({name, address, image, login}) {

    return (
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
            <img src={image} class="card-img-top" alt="Dog Park Pitcure"/>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0" >{name}</h5>
                    <div class="card-text text-black-50">
                        <span style={{fontSize:"90%"}}><i class="fa-solid fa-location-dot"></i> {address}</span>
                    </div>
                    
                    <hr/>
                    
                    {login ? <button type="button" class="btn btn-outline-info">Check In</button> : <button type="button" class="btn btn-outline-info">Log In</button>}
                    
                </div>
            </div>
      </div>
    )
}

export default DogParkItem