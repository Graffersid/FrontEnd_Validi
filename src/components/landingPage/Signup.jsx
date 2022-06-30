import React, { useState } from 'react'
import axios from 'axios';
import { Sign_up } from "../../action"
import { useDispatch, useSelector } from 'react-redux'
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faPhone, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../asset/manLogo.png"


const Signup = () => {

    const [state, setState] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        password: '',
        confirmPassword: ''
    })
    const [signup, setSignup] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const status = useSelector((state) => state.signupReducer.signup_response.status);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("http://192.168.1.79/api/v1/signup", state);
            console.log(response.data, "Signup_response")
            dispatch(Sign_up(response.data));
        }
        catch (error) {
            console.log('Error while calling getPosts API ', error)
        }
        if (status === "true") {
            console.log(status,"nexttttt")
            navigate("/info")
        }

    }

    const signupHandler = () => {
        setSignup(true)
    }

    return (
        <div className="container-fluid background" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className='image'>
                <img src={logo} alt="" height="100%" width="100%" />
                <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim Facilisis posuere ornare.</p>
            </div>
            <div className='check'>
                <div className='outermain'>
                    <div className='main'>
                        <div className="card child">

                            <div className="mybody">
                                <h1>SIGNUP</h1>
                                <p>Already have an account? <Link to="/login" className='redirect' style={{ textDecoration: "none" }}>LOGIN</Link></p>
                                <button className='btn g-button'><FontAwesomeIcon icon={faKey} size="1x" /> SignUp with Google</button><br />
                                {signup ? <div className='line_text'> Also Signup With </div> : ""}
                                {signup ? "" : <button onClick={signupHandler} className="btn g-button"><FontAwesomeIcon icon={faEnvelope} size="2px" /> Signup with mail </button>}
                                <div className={signup ? "after" : "before"}>
                                    <p className='line'>  </p>
                                    <form onSubmit={handler} >
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUser} size="2x" />
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" name='fullName' value={state.fullName} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name='email' value={state.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faPhone} size="2x" />
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No." name='contactNumber' value={state.contactNumber} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faLock} size="2x" />
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={state.password} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faKey} size="2x" />
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name='confirmPassword' value={state.confirmPassword} onChange={handleChange} required />
                                        </div>
                                        <button type="submit" className="btn btn-signup">Next</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup