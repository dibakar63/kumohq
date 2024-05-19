import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Section = () => {
  return (
    <div className='container-fluid' style={{marginTop:"2px",height:"auto",fontFamily:"Graphik Web",color:"black"}}>
    <div className='row' style={{padding:"80px"}}>
        <div className='col-lg-6 col-md-12 col-sm-12 text-start d-flex align-items-center justify-content-center ' style={{padding:"20px"}} >
           <div  className='d-flex flex-column ' style={{padding:'20px'}}>
            <span style={{fontSize:"55px"}}>Get started easily with a personalized product tour</span>
            <p style={{fontSize:"25px"}}>An onboarding specialist is here to help you get started with<br/> confidence—it’s included with Standard and Premium plans.*</p>
            <div className='hover p-1' style={{borderRadius:"12px"}}>
                <p  style={{fontSize:"23px",borderRadius:"12px"}}>Learn More About onboarding <span style={{background:"yellow",borderRadius:"50%",padding:"10px"}}><FaArrowRightLong/></span></p>
            </div>
        </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 h-auto' >
            <img className='img-fluid' src='https://eep.io/images/yzco4xsimv0y/eeOxTgGvLZjag4xB9SK7h/18bbe5f5514e075ae697322976223c1f/Onboarding_Placement_-_Woman_on_phone_and_laptop.png'/>
        </div>
    </div>
      
    </div>
  )
}

export default Section
