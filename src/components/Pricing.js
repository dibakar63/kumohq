import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Pricing = () => {
    const [value,setValue]=useState(575);
    const handleChange=(price)=>{
        setValue(price)
    }
    console.log(value)
  return (
    
    <div className='row h-auto' style={{backgroundColor:"#EDEADF",fontFamily:"Graphik Web",}}>
        <div className='col-12 text-center d-flex justify-content-center align-items-center'>
        <div>
          <span style={{fontSize:"35px"}}>Limited time offer</span>
          <p style={{fontSize:"55px"}}><b>Save <u className='rounded' style={{textDecorationColor:"yellow"}}> 50% </u>for 12 months</b></p>
          <p className='border border-dark rounded p-2' style={{fontSize:"40px"}}>How many contacts do you have?    <select onSelect={handleChange}>
            <option value={500}>500</option>
            <option value={1500}>1500</option>
            <option value={2000}>2500</option>
            <option value={3000}>3000</option>
          </select></p>
        </div>
        </div>
        <div className='col-12'>
            <div className='row g-0' style={{padding:"20px"}}>
                <div className='col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-start '>
                <div style={{padding:'20px',background:"white"}} className='border boder-black rounded'>
                   <h1>Premium</h1>
                   <p>Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.</p>

                   <br/>
                   <br/>
                   <p>Starts at</p>
                   <p style={{textDecoration:"line-through"}}><FaRupeeSign/>23000</p>
                   <p><FaRupeeSign/>11500</p>
                   <p>for 12 months</p>

                   <p><AiOutlineCheck/> Phone and priority support</p>
                   <hr/>
                   <p><AiOutlineCheck/> Custom-coded and Pre-built Email Templates</p><hr/>
                   <p><AiOutlineCheck/> Multivariate and A/B Testing</p><hr/>
                   <p><AiOutlineCheck/> Enhanced Automated Customer Journeys</p><hr/>
                   <p><AiOutlineCheck/> Dedicated Personalized Onboarding</p><hr/>
                   <p><AiOutlineCheck/> Predictive Segmentation</p><hr/>
                   <p><AiOutlineCheck/> Campaign Manager</p>
                   <button className='btn btn-light border border-dark rounded-pill'>Buy Now</button>

                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-start high'>
                <div style={{padding:'20px',background:"white"}} className='border boder-black rounded'>
                   <h1>Standard</h1>
                   <p>Sell even more with personalization, optimization tools, and enhanced automations.</p>

                   <br/>
                   <br/>
                   <p>Starts at</p>
                   <p style={{textDecoration:"line-through"}}><FaRupeeSign/>1150</p>
                   <p><FaRupeeSign/>575</p>
                   <p>for 12 months</p>

                   <p><AiOutlineCheck/>24/7 Email & Chat Support</p>
                   <hr/>
                   <p><AiOutlineCheck/> Custom-coded and Pre-built Email Templates</p><hr/>
                   <p><AiOutlineCheck/> Multivariate and A/B Testing</p><hr/>
                   <p><AiOutlineCheck/> Enhanced Automated Customer Journeys</p><hr/>
                   <p><AiOutlineCheck/> Personalized Onboarding</p><hr/>
                   <p><AiOutlineCheck/> Predictive Segmentation</p><hr/>
                   <p><AiOutlineCheck/> Campaign Manager</p>
                   <button className='btn btn-warning border border-dark rounded-pill'>Buy Now</button>


                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-start '>
                <div style={{padding:'20px',background:"white"}} className='border boder-black rounded'>
                   <h1>Essentials</h1>
                   <p>Send the right content at the right time with testing and scheduling features.</p>

                   <br/>
                   <br/>
                   <p>Starts at</p>
                   <p style={{textDecoration:"line-through"}}><FaRupeeSign/>770</p>
                   <p><FaRupeeSign/>385</p>
                   <p>for 12 months</p>

                   <p><AiOutlineCheck/>24/7 Email & Chat Support</p>
                   <hr/>
                   <p><AiOutlineCheck/> Custom-coded and Pre-built Email Templates</p><hr/>
                   <p><AiOutlineCheck/> Multivariate and A/B Testing</p><hr/>
                   <p><AiOutlineCheck/> Enhanced Automated Customer Journeys</p><hr/>
                   <p><AiOutlineClose/> Personalized Onboarding</p><hr/>
                   <p><AiOutlineClose/> Predictive Segmentation</p><hr/>
                   <p><AiOutlineClose/> Campaign Manager</p>
                   <button className='btn btn-light border border-dark rounded-pill'>Buy Now</button>


                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-start'>
                <div style={{padding:'20px',background:"white"}} className='border boder-black rounded'>
                   <h1>Free</h1>
                   <p>Easily create email campaigns and learn more about your customers.</p>

                   <br/>
                   <br/>
                   <p>Starts at</p>
                   <p style={{textDecoration:"line-through"}}><FaRupeeSign/>300</p>
                   <p><FaRupeeSign/>0</p>
                   <p>per month</p>

                   <p><AiOutlineCheck/> Email support for first 30 days</p>
                   <hr/>
                   <p><AiOutlineCheck/> Pre-built Email Templates</p><hr/>
                   <p><AiOutlineClose/> A/B Testing</p><hr/>
                   <p><AiOutlineClose/> Basic Automated Customer Journeys</p><hr/>
                   <p><AiOutlineClose/> Onboarding</p><hr/>
                   <p><AiOutlineClose/> Predictive Segmentation</p><hr/>
                   <p><AiOutlineClose/> Campaign Manager</p>
                   <button className='btn btn-light border border-dark rounded-pill'>Buy Now</button>


                </div>
                </div>
            </div>
        </div>
        <div className='col-12 d-flex flex-column jusity-content-center align-items-center text-center'>
            <div>
                <p style={{marginTop:"35px",fontSize:"22px"}}>
*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more</p>
<div >
<p  style={{fontSize:"33px",borderRadius:"12px"}}>See all plan details <span style={{background:"yellow",borderRadius:"50%",padding:"10px"}}><FaArrowRightLong/></span></p>
            </div>
     </div>
        </div>
    </div>
      
    
  )
}

export default Pricing
