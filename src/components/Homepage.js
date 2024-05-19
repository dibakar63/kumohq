import React from 'react'
import Card from './Card'
import Content from './Content'
import Section from './Section'
import Pricing from './Pricing'
import Marketing from './Marketing'
import SocialPlatfrom from './Social-Platfrom'
import Disclaimer from './Disclaimer'
import Footer from './footer'

const Homepage = () => {
  return (
    <div className='container-fluid  ' style={{fontFamily:"Graphik Web",marginTop:"85px"}}>
    <div className='d-flex flex-column  align-items-center justify-content-center w-full ' style={{height:"300px"}}>
        <h1 className='text-xl' style={{fontSize:"55px"}}><b>Turn Emails into Revenue</b></h1>
        <p style={{fontSize:"25px"}}>Win new customers with the #1 email marketing and automations platform* <br/>that recommends ways to get more opens, clicks, and sales.</p>
        <div >
        <button className='btn btn-warning  rounded-pill text-center mt-30 signup' style={{fontSize:"15px",width:"110px"}}>Signup</button>
        </div>
    </div>
    <Card/>
    <Content/>
    <Section/>
    <Pricing/>
    <Marketing/>
    <SocialPlatfrom/>
    <Disclaimer/>
    <Footer/>
      
    </div>
  )
}

export default Homepage
