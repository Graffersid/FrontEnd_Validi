import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <p className="navbar-brand">VALIDI.ME</p>
                    <form className="form-inline">
                        <Link to="/login"><button className="btn btn-success my-2 my-sm-0 mx-2" type="submit">Login</button></Link>
                        <button className='btn btn-primary'> Signup</button>
                    </form>
                </nav>
            </div>
        </>
    )
}

export default LandingPage