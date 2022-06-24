import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import DogTile from './DogTile.js';
import './CheckIn.css'
function CheckIn ({user, setIsCheckedIn, isLoggedIn}) {
    const params = useParams();
    // State hook for a dog dark data
    const [dogPark, setDogPark] = useState([])
    // State hook for a check in to list 
    const [checkIns, setCheckIns] = useState([])
    // State hook for an error to display
    const [errors, setErrors] = useState([])
    // State hook for a new check-in data
    const [data, setData] = useState({
        user_id: 0,
        dog_id: 0,
        dog_park_id: params.id
    })
    useEffect(()=>{
    // Fetching to get an individual dog park data to display
      fetch(`/dog_parks/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setDogPark(data)
      })
    // Fetching to list all the check-ins to list the active dogs at the park
      fetch(`/check_ins`)
      .then(res => res.json())
      .then(data => {
        setCheckIns(data)
      })
    },[])
    // Help refrenshing the page
    if (!user) return null
    // Showing All the Active Dogs
    // Returning all the check-ins at the park
    let matchedCheckIns = checkIns.filter(checkIn => checkIn.dog_park_id === params.id)
    // Mapping through and returning images to show the dog pictures associated with the check-ins
    let checkedInDogsPics = matchedCheckIns.map(checkIn => {
        // return <img src={checkIn.dog.img} alt={checkIn.dog.name}/>
        return <DogTile dog={checkIn.dog} height="100px" width="100px" isLoggedIn={isLoggedIn} />
    })
    console.log(matchedCheckIns.length)
    if (matchedCheckIns.length === 0) {
        checkedInDogsPics = null
    } else {
        checkedInDogsPics = matchedCheckIns.map(checkIn => {
            return (
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                    <img src={checkIn.dog.img} className="card-img-top" alt="Dog Park Pitcure"/>
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0" ><i class="fa-solid fa-paw"></i> {checkIn.dog.name}</h5>
                        <div class="card-text text-black-50">
                            <span style={{fontSize:"90%"}}><i class="fa-solid fa-user-alien"></i> {checkIn.dog.breed}</span>
                        </div>
                        <hr/>
                        <Link to={`/dogs/${checkIn.dog.id}`}>
                        <button type="button" class="btn btn-outline-info">See profile</button> 
                        </Link>
                    </div>
                </div>
            </div>
        )})
    }
    
    // Creating/Deleting a New Check-in Data
    // Mapping throguh the user's dogs to put in the pull-down list in the forn
    let eachDog = user.dogs.map(dog =>
        <option key={dog.id} value={dog.id}>{dog.name}</option>)    
    // Grabbing the pull-down list and setting the dog_id to a new check-in data
    function handleChange(e) { 
        const {name, value} = e.target
        setData((data => ({...data, [name]: value, user_id: user.id})))
    }

    // Submitting the new check-in information to the server
    function handleCheckIn (e) {
        e.preventDefault()
        console.log(data)
        fetch("/check_ins", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
                    setIsCheckedIn(true)
                })
            } else {
                r.json().then((err) => setErrors(err.errors));
                console.log(errors)
            }
        })
    }


    // Deleting the check-in
    function handleCheckOut () {
        fetch(`/check_ins/${user.check_ins[0].id}`, {
            method: "DELETE"})
        .then(r => {
            if(r.ok) {
                console.log(r)
                setIsCheckedIn(false)
            } else {
                r.json().then(console.log)
            }
        })
    }

    // Showing Check-in/Check-out/Please Check-out Buttons

    // Grab the checked in dog park id from the logged-in user
    let checked_park_ids = user.check_ins.map ( check_in => {
        let newArr = []
        newArr += check_in.dog_park_id
        return newArr
    })

    const link = () => `http://localhost:4000/dog_parks/${user.check_ins[0].dog_park_id}`

    let showButtons 
        // If the checked in dog park is the same as the params.id, return Check Out button
        if (checked_park_ids.find(checked_park_id => checked_park_id === params.id)) {
            showButtons = <button type="submit" className="btn btn-outline-primary" onClick={handleCheckOut}>Check Out</button>

        // Else if the user is checked in but not on the checked-in dog park page, return "Please Check Out First"
        } else if (user.checked_in_status) {
            showButtons = 
            <div class="col-md-12 text-center">
                <p>To check in at park, please check out first! <a href={link()}>Here</a></p>
            </div>
        } else {
            // Else if the user is not checked-in at all, show the check-in buttons with the pull-down of user's dogs
            showButtons =
            <form className="form" id='form' onSubmit={handleCheckIn}>
                <div className="row justify-content-center" style={{padding:"15px"}}>
                <label className="col-sm-1 col-form-label" for="dog_id">Choose Dog</label>
                    <div className="col-sm-5">
                        <select 
                        onChange={handleChange} 
                        className="form-control" 
                        name="dog_id">
                            <option>Select Dog</option>
                            {eachDog}
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-primary">Check In</button>
            </form>
        }

    return (
        <>
        <div class="logo mb-0"  style={{paddingTop:"3%"}}>
			<div class="col-md-12 text-center">
				<h1><i class="fa-solid fa-tree"></i> {dogPark.name}</h1>
                    <div class="text-black-50">
                        <span style={{fontSize:"130%"}}><i class="fa-solid fa-user-alien"></i> {dogPark.address}</span>
                    </div>
			</div>
		</div>

        <hr/>

        <div className="homepage-container" style={{position: "relative",backgroundColor: "white"}}>
                <img id='check-in-park-pic' src={dogPark.img} alt={dogPark.name} />
        </div>

        <hr/>

        {matchedCheckIns.length === 0 ? null :
        
        <div class="col-md-12 text-center">
            <h3>Friends @ Park <i class="fa-solid fa-dog"></i></h3>
        </div>
        
        }
        
        <div id='checked-in-dogs'>
            {checkedInDogsPics}
        </div>
        
        
        <hr/>
        {showButtons}
        <div style={{padding:"0.5%"}}></div>
        </>
    )
}

export default CheckIn
