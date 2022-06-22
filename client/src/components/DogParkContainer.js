import React, {useState, useEffect} from 'react';
import DogParkItem from './DogParkItem'

function DogParkContainer ({isLoggedIn}) {

    const [dogParks, setDogParks] = useState([])

    useEffect(() => {
        fetch('/dog_parks')
        .then(r => r.json())
        .then(data => setDogParks(data))
    }, []
    )

    let renderDogParkItem = dogParks.map (dogPark => {
        return <DogParkItem name={dogPark.name} address={dogPark.address} image={dogPark.img} login={isLoggedIn}/>
    })

    return (
        <>
        <div style={{position: "relative", height: "50rem"}}>
            <h1 style={{position: "absolute", top: "10%", left: "25%"}}>Find Dog Parks and Check In!</h1>
            
            <div style={{width: "50%", marginRight: "auto", marginLeft: "0"}}>
                <h3 style={{position: "absolute", top: "30%", left:"25%"}}>Manners <i class="fa-solid fa-person-circle-exclamation"></i></h3>
                <ul>
                    <li style={{position: "absolute", top: "37%", left:"25%"}}><i class="fa-solid fa-bone"></i> Make sure to keept it clean</li>
                    <li style={{position: "absolute", top: "40%", left:"25%"}}><i class="fa-solid fa-bone"></i> Use manner bags for dog poops</li>
                    <li style={{position: "absolute", top: "43%", left:"25%"}}><i class="fa-solid fa-bone"></i> No food allowed at some parks</li>
                </ul>
                <h3 style={{position: "absolute", top: "60%", left:"25%"}}>Check In/Check Out <i class="fa-solid fa-circle-check"></i></h3>
                <ul>
                    <li style={{position: "absolute", top: "67%", left:"25%"}}><i class="fa-solid fa-bone"></i> If you will go to a dog park, check in to the dog park</li>
                    <li style={{position: "absolute", top: "70%", left:"25%"}}><i class="fa-solid fa-bone"></i> See other dogs at the park</li>
                    <li style={{position: "absolute", top: "73%", left:"25%"}}><i class="fa-solid fa-bone"></i> Don't forget to check out</li>
                </ul>
            </div>

            <div style={{width: "50%", marginRight: "0", marginLeft: "auto"}}>
                <h3 style={{position: "absolute", top: "30%", left:"50%"}}>Find Dog Parks <i class="fa-solid fa-map"></i></h3>
                <ul>
                    <li style={{position: "absolute", top: "37%", left:"50%"}}><i class="fa-solid fa-bone"></i> See the list of dog parks in NYC</li>
                    <li style={{position: "absolute", top: "40%", left:"50%"}}><i class="fa-solid fa-bone"></i> Find out the location</li>
                    <li style={{position: "absolute", top: "43%", left:"50%"}}><i class="fa-solid fa-bone"></i> Check how busy the park is</li>
                </ul>
                <h3 style={{position: "absolute", top: "60%", left:"50%"}}>Dogs at the Park <i class="fa-solid fa-shield-dog"></i></h3>
                <ul>
                    <li style={{position: "absolute", top: "67%", left:"50%"}}><i class="fa-solid fa-bone"></i> See which dogs are there at the park</li>
                    <li style={{position: "absolute", top: "70%", left:"50%"}}><i class="fa-solid fa-bone"></i> Check their profile</li>
                    <li style={{position: "absolute", top: "73%", left:"50%"}}><i class="fa-solid fa-bone"></i> See who the owner is</li>
                </ul>
            </div>
            
            

        </div>

        <div class="container">
            <div class="row">
                {renderDogParkItem}
            </div>
        </div>
        </>
    )
}
    

export default DogParkContainer