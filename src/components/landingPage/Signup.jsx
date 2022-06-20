import React, { useState } from 'react'
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faPhone, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <div className="container-fluid background">
            <div className='main'>
            <div className="card child">
                <div className="card-body">
                    <h1>SIGNUP</h1>
                    <p>Already have an account? <Link to="/login" className='redirect'>LOGIN</Link></p>
                    <button className='btn g-button'><FontAwesomeIcon icon={faKey} size="1x" /> SignUp with Google</button>
                    <form>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faUser} size="2x" />
                                </span>
                            </div>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" name='email' value={state.email} onChange={handleChange} required />
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
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No." name='email' value={state.email} onChange={handleChange} required />
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
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name='password' value={state.password} onChange={handleChange} required />
                        </div>
                        <Link to='/info'><button type="submit" className="btn btn-signup">Next</button></Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Signup