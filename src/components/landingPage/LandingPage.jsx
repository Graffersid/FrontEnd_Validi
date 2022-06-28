import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';
import logo1 from "../../asset/logo1.png"
import logo2 from "../../asset/logo2.png"
import logo3 from "../../asset/logo3.png"
import logo4 from "../../asset/logo4.png"
import ideaLogo from "../../asset/IdeaLogo.gif"
import line from "../../asset/Line1.jpg"


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
                <div className='row'>
                    <div className='col logo1'>
                    <img src={logo1} alt="" height="" width="" />
                    </div>
                    <div className='col '>
                       <h2 className='text-heading'>What Is <span style={{color:"coral"}}>  Validi.me? </span></h2>
                       <p className='text-content'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim. Facilisis posuere ornare tempor eros laoreet arcu sed. Sit sed id urna feugiat ut sit viverra quam. Ac, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor at ut tincidunt elementum enim. Facilisis posuere ornare tempor eros laoreet arcu sed. Sit sed id urna feugiat ut sit viverra quam. Ac... Read More. </p>
                    </div>
                </div>
                <div className='text2'>
                How <br />Validi.me <span style={{color:'coral'}}>works</span> 
                </div>
                <div className='row'>
                    <div className='col-4 logo2'>
                        <img src={logo2} alt="" />
                    </div>
                    <div className='col-3'>
                        <h2 className='text-heading1'>Create profile</h2>
                        <p className='text-content1'>We ask you 5-6 questions which helps us understand your background.</p>
                    </div>
                    <div className='col idea-logo'>
                        <img src={ideaLogo} alt="" height="40%" width="20%" />
                        <img src={line} alt=""  className="line1" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2 className='text-heading2'>Collect 10+ points to publish your idea.</h2>
                        <p className='text-content2'>You can publish your idea and get it validated from the specific target audience on the platform without any reachouts or cold mailing</p>
                    </div>
                    <div className='col logo3'>
                        <img src={logo3} alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col logo4'>
                        <img src={logo4} alt="" />
                    </div>
                    <div className='col'>
                        <h2 className='text-heading3'>Collect Points, Curated Start up ideas which you can help validate</h2>
                        <p className='text-content3'>You get +5 Points for each idea you validate. Based on your profile info we match you to the target audience criteria of the published idea which you can help in validating.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 col-sm-6 main-div'>
                        <div className='child-div'>
                            <h2 className='text-heading4'>Get, Set & Validate the Idea and be a Part of the Community</h2>
                            <button className='btn share-idea'>Share Idea</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage