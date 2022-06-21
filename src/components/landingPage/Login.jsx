import React, { useState } from 'react'
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from "../../asset/manLogo.png"


const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  return (
    <div className="container-fluid login-background">
      <div className='logo'>
        <img src={logo} alt="" height="100%" width="100%" />
        <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim Facilisis posuere ornare.</p>
      </div>
      <div className='login-main'>
        <div className="card login-child">
          <div className="card-body">
            <h1>Login</h1>
            <p>Don't have an account? <Link to="/signup" className='redirect' style={{textDecoration:"none"}}>Sign Up</Link></p>
            <button className='btn g-button'><FontAwesomeIcon icon={faKey} size="1x" /> SignUp with Google</button>
            <div className='line_text'> Also Login With </div>
            <p className='line'>  </p>
            <form>
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
                    <FontAwesomeIcon icon={faLock} size="2x" />
                  </span>
                </div>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={state.password} onChange={handleChange} required />
              </div>
              <div className='d-flex justify-content-end text-center mt-3' >
                <p className="small mb-5 pb-lg-2 mx-auto forget-pass"><a className="text-muted" href="#!">Forgot password?</a></p>
                <Link to="#"><button type="submit" className="btn btn-login" style={{textDecoration:"none"}}>Next</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login