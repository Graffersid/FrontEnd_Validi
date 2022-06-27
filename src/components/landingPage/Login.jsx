import React, { useState } from 'react'
import './Login.css';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import logo from "../../asset/manLogo.png"
import axios from 'axios';



const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [login, setLogin] = useState(false)

  const handleChange = (e) => {
    setState({[e.target.name]: e.target.value })
  }

  const loginHandler = () => {
    setLogin(true)
  }

  const handler = async (e) => {
    e.preventDefault();
    await axios({
        url: "http://192.168.1.79:9090/api/v1/login",
        method: "POST",
        headers: { "content-Type": "application/json" },
        data: state

    }).then((res) => {
        alert(res.data.message)
        localStorage.setItem("userInfo", JSON.stringify(res))
        console.log(res,"login--------")
    }).catch(() => console.log(alert("invalid Details")))
}


  return (
    <div className="container-fluid login-background" style={{ display: "flex", justifyContent: "space-around"}} >
      <div className='logo'>
        <img src={logo} alt="" height="100%" width="100%" />
        <p className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim Facilisis posuere ornare.</p>
      </div>
      <div className='check-log'>
      <div className='log-main'>
      <div className='login-main'>
        <div className="card login-child">
          <div className="card-body">
            <h1>Login</h1>
            <p>Don't have an account? <Link to="/signup" className='redirect' style={{ textDecoration: "none" }}>Sign Up</Link></p>
            <button className='btn g-button'><FontAwesomeIcon icon={faKey} size="1x" /> Login with Google</button>
            {login ? <div className='line_text'> Also Signup With </div> : ""}
            {login ? "" : <button onClick={loginHandler} className="btn g-button"><FontAwesomeIcon icon={faEnvelope} size="2px" /> Login with mail </button>}
            <div className={login ? "after" : "before"}>
            <p className='line'>  </p>
            <form onSubmit={handler}>
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
                <button type="submit" className="btn btn-login" style={{ textDecoration: "none" }}>Next</button>
              </div>
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

export default Login