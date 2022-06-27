import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';
import logo from "../../asset/logo1.png"

const LandingPage = () => {
    return (
        <>
            <div className="container-fluid background-landing">
                <div className='idea-text'>
                    <div>
                        What’s your
                    </div>
                    <div className='new-text'>New IDea</div>
                </div>
                <p className='text'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim.  </p>
                <button className='btn share-btn'>share idea</button>
                <div>
                    <div className='logo1'>
                    <img src={logo} alt="" height="100%" width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage