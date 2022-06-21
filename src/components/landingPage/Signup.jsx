import React, { useState } from 'react'
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faPhone, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from "../../asset/manLogo.png"
import { signUp } from '../../service/api';


const Signup = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        contactNo: '',
        password: '',
        confirm_password: ''
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }

    const handler = async (e) => {
        e.preventDefault();
       await signUp(state)

    }

    return (
        <div className="container-fluid background">
            <div className='image'>
                <img src={logo} alt="" height="100%" width="100%" />
                <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim Facilisis posuere ornare.</p>
            </div>
            <div className='main'>
                <div className="card child">
                    <div className="card-body">
                        <h1>SIGNUP</h1>
                        <p>Already have an account? <Link to="/login" className='redirect' style={{ textDecoration: "none" }}>LOGIN</Link></p>
                        <button className='btn g-button'><FontAwesomeIcon icon={faKey} size="1x" /> SignUp with Google</button>
                        <div className='line_text'> Also Signup With </div>
                        <p className='line'>  </p>
                        <form onSubmit={handler}>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faUser} size="2x" />
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" name='name' value={state.name} onChange={handleChange} required />
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
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No." name='contactNo' value={state.contactNo} onChange={handleChange} required />
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
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name='confirm_password' value={state.confirm_password} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-signup">Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup