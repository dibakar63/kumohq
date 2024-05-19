import React from 'react'
import { IoSearch } from "react-icons/io5";
import { GiMonkey } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light " style={{fontFamily:"Graphik Web"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img className='img-fluid' style={{width:"150px"}} src='https://th.bing.com/th/id/OIP.Ssgm7hpF1tDoYZ98aXP8dwHaBo?rs=1&pid=ImgDetMain'/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <b> Solutions and Services</b>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <b> Resources</b>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              
            </ul>

          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><b>Switch to mailchimp</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><b>Pricing</b></a>
          </li>
        </ul>
        <form className="d-flex gap-3" style={{fontSize:'18px'}}>
          
          <button className="btn btn-light" type="submit"><IoSearch/></button>
          <button className="btn btn-light" type="submit"><FaGlobe/><b> En+</b></button>
          <button className="btn btn-light" type="submit"><b>Sales:+1(800) 315-5939</b></button>
          <button className="btn  border border-dark rounded-pill" type="submit"><b>Login</b></button>
          <button className="btn btn-warning border border-dark rounded-pill w-30 singup" type="submit">Signup</button>
        </form>
      </div>
    </div>
  </nav>    

  )
}

export default Navbar
