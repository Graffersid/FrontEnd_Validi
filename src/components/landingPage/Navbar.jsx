import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../asset/validiLogo.jpg"

const Navbar = () => {
  return (
    <>
            <div className="container-fluid">
                <nav className="navbar navbar-light justify-content-between">
                   <Link to="/" style={{textDecoration:"none"}}> <p className="navbar-brand nav-img"><img src={logo} alt="" /></p></Link>
                    <form className="form-inline">
                        <Link to="/login" style={{textDecoration:"none"}}><button className="btn btn-nav my-2 my-sm-0 mx-2" type="submit">Login</button></Link>
                        <Link to="/signup" style={{textDecoration:"none"}}><button className='btn btn-nav'> Signup</button></Link>
                    </form>
                </nav>
            </div>
        </>
  )
}

export default Navbar