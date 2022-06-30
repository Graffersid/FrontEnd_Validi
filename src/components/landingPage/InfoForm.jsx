import React, { useState } from 'react'
import './InfoForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux'

const InfoForm = () => {

  const [info, setInfo] = useState({
    age: '',
    gender: '',
    maritalStatus: '',
    occupation: '',
    expertise: ''
  })
  // const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [states, setStates] = useState([]);
  const [city, setCity] = useState("")
  const id = useSelector((state) => state.signupReducer.signup_response.data.userId);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
    if (e.target.id === "city") {
      setCity(e.target.value);
    }
    if (e.target.id === "state") {
      setState(e.target.value);
    }
    if (e.target.id === 'country') {
      setCountry(e.target.value)
      if (e.target.value === "country...") {
        const states = ["state.."];
        setState("");
        setStates(states);
      }
      if (e.target.value === "India") {
        const states = ["MP", "UP"];
        setState("MP");
        setStates(states);
      }
      if (e.target.value === "United States") {
        const states = ["Alabama", "Alaska", "Arizona", "Florida", "Michigan", "California"];
        setState("Alabama");
        setStates(states);
      }
      if (e.target.value === "Australia") {
        const states = ["New South Wales", "Queensland", "Victoria", "Australian Capital Territory"];
        setState("New South Wales");
        setStates(states);
      }
      if (e.target.value === "Italy") {
        const states = ["Lazio", "Calabria", "Marche"];
        setState("Lazio");
        setStates(states);
      }
      if (e.target.value === "Mexico") {
        const states = ["Chiapas", "Durango", "Guerrero"];
        setState("Chiapas");
        setStates(states);
      }
      if (e.target.value === "New Zealand") {
        const states = ["Auckland", "Christchurch", "Wellington", "Hamilton"];
        setState("Auckland");
        setStates(states);
      }
    }
  }
  const data = { userId: id, age: info.age, gender: info.gender, maritalStatus: info.maritalStatus, occupation: info.occupation, experties: info.expertise, country, state, city }
  console.log(data, "info")

  const handler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put("http://192.168.1.79/api/v1/updateProfile", data);
      console.log(response, "response")
      return response.data;
    } catch (error) {
      console.log('Error while calling getPosts API ', error)
    }
  }

  return (
    <>
      <div className='container-fluid background'>
        <div className="card card-style" >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }} >
              <input type="file" className="" id="exampleInputPassword1" placeholder="" name='' onChange={handleChange} />
            </div>
            <form onSubmit={handler}>
              <div class="row">
                <div class="col">
                  <div className="form-group input-group" style={{ marginBottom: "20px" }}>
                    <select className="form-control" id='ageGroup' name='age' value={info.age} onChange={handleChange} >
                      <option >Age Group...</option>
                      <option value="18-22">18-22</option>
                      <option value="23-27">23-27</option>
                      <option value="28-32">28-32</option>
                      <option value="">33-37</option>
                    </select>
                  </div>
                </div>
                <div class="col">
                  <div className="form-group input-group ">
                    <select className="form-control" id='gender' name='gender' value={info.gender} onChange={handleChange} >
                      <option >Gender...</option>
                      <option value="M">M</option>
                      <option value="F">F</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group input-group " style={{ marginBottom: "20px" }}>
                <select className="form-control" value={country} id='country' onChange={handleChange} >
                  <option value="country...">country...</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Australia">Australia</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Italy">Italy</option>
                  <option value="New Zealand">New Zealand</option>
                </select>
              </div>
              <div class="row">
                <div class="col">
                  <div className="form-group input-group " style={{ marginBottom: "20px" }}>
                    <select className="form-control" id='state' value={state} onChange={handleChange} >
                      {states && states.length ? states.map((st, index) =>
                        <option key={index}>{st}</option>
                      ) : null}

                    </select>
                  </div>
                </div>
                <div class="col">
                  <div className="form-group input-group">
                    <select className="form-control" id='city' value={city} onChange={handleChange} >
                      <option value="">city...</option>
                      <option value="Indore">Indore</option>
                      <option value="Dewas">Dewas</option>
                      <option value="Bhopal">Bhopal</option>

                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group input-group " style={{ marginBottom: "20px" }}>
                <select className="form-control" id='maritalStatus' name='maritalStatus' value={info.maritalStatus} onChange={handleChange} >
                  <option>Marital Status...</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div className="form-group input-group " style={{ marginBottom: "20px" }}>
                <select className="form-control" id='occupation' name='occupation' value={info.occupation} onChange={handleChange} >
                  <option>Your Occupation...</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>
              <div className="form-group input-group">
                <input type="text" className="form-control" id="expertise" placeholder="Expertise" name='expertise' value={info.expertise} onChange={handleChange} required />
              </div>
              <div className='d-flex justify-content-end text-center mt-3' >
                <button type="submit" className="btn btn-login" style={{ textDecoration: "none" }}>Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoForm