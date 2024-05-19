import React from 'react'

const Card = () => {
  return (
    
      <div className='row  g-0 ' style={{marginTop:"80px"}} >
        <div className='col-lg-3 col-md-6 col-sm-12' >
        <div >
            <img className='img-fluid card' src='https://eep.io/images/yzco4xsimv0y/5EODYdgDf1houB82RfR8e0/d3a56636ba2d48943ab54513277458bc/Homepage-Feature-Card-Automations-Desktop-INT__1_.png'/>
            <div style={{backgroundColor:"#D3B226",height:"200px",fontFamily:"Graphik Web",fontSize:"18px"}} className='d-flex flex-column
            justify-content-center align-items-start p-4'>
                <p className='text-start'>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                <button className='btn border border-dark rounded-pill '>Explore Marketing Automation</button>
            </div>
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
        <div>
        <img className='img-fluid card' src='https://eep.io/images/yzco4xsimv0y/3JSoRinRB2VTmBiD7NyEUg/f48b012abacf15bc323135c3d9e3cbe2/Homepage-Feature-Card-AI-Desktop.png'/>
        <div style={{backgroundColor:"#ffffff",height:"200px",fontFamily:"Graphik Web",fontSize:"18px"}} className='d-flex flex-column
            justify-content-center align-items-start p-4'>
                <p className='text-start'>Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates..</p>
                <button className='btn border border-dark rounded-pill '>Explore Ai tools</button>
            </div>
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
        <div>
        <img  className='img-fluid card' src='https://eep.io/images/yzco4xsimv0y/6QVNtP8As7OHsx5mivPn8f/c802814a27e36ee4a016556501e6ec85/Homepage-Feature-Card-Segmentation-Desktop.png'/>
        <div style={{backgroundColor:"#E7CC55",height:"200px",fontFamily:"Graphik Web",fontSize:"18px"}} className='d-flex flex-column
            justify-content-center align-items-start p-4'>
                <p className='text-start'>Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.</p>
                <button className='btn border border-dark rounded-pill '>Explore audience management</button>
            </div>
        </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
        <div>
        <img className='img-fluid card ' src='https://eep.io/images/yzco4xsimv0y/6JxWAec8e3X3OMFmX9dVvd/9f34fab9dcbe5d69c4faf2c0d1b9b5ae/Homepage-Feature-Card-Analytics-Reporting-Desktop.png'/>
        <div style={{backgroundColor:"#F2E8B9",height:"200px",fontFamily:"Graphik Web",fontSize:"18px"}} className='d-flex flex-column
            justify-content-center align-items-start p-4'>
                <p className='text-start'>Analyze performance with custom reports, funnel visualizations, and industry benchmarking.</p>
                <button className='btn border border-dark rounded-pill '>Explore analytics & reporting</button>
            </div>
        </div>
        </div>
      </div>
   
  )
}

export default Card 
