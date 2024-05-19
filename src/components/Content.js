import React from 'react'

const Content = () => {
  return (
    <div className='container-fluid  ' style={{marginTop:"2px",height:"auto",fontFamily:"Graphik Web",color:"white",backgroundColor:"#383529"}}>
    
    <div className='row g-0 h-auto ' style={{padding:"50px",backgroundColor:"#383529",}}>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <span style={{fontSize:"50px"}}><b>Find out why we’re<br/>  best-in-class</b></span>
            <p style={{fontSize:"22px"}}><b>The #1 email marketing and automations platform* that recommends ways to get more opens, clicks, and sales.</b></p>
        </div>
        <div className='col-lg-4 col-md-3 col-sm-12'>
          <div className='d-flex  flex-column justify-content-center align-items-center '>
          <div className=''>
            <span style={{fontSize:"32px"}}><b>Up to 25x ROI</b></span>
            <p><b>seen by Mailchimp users*</b></p>
            </div>
            
            <div className=''>
            <h4><b>11M+ Users</b></h4>
            
            <p>of Mailchimp globally</p>
            </div>
            </div>
        </div>
        <div className='col-lg-4 col-md-3 col-sm12'>
        <div className='d-flex  flex-column justify-content-center align-items-center '>
          <div className=''>
            <span style={{fontSize:"32px"}}>22 years experience</span>
            <p>helping businesses sell more</p>
            </div>
            <div className=''>
            <span style={{fontSize:"32px"}}>$1.7K per campaign</span>
            <p>generated on average*</p>
            </div>
            </div>
        </div>
    </div>
      </div>
   
  )
}

export default Content
