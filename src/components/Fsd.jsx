import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Fsd() {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <div className='card-group'>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/fsd/card1' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>7 Best Full-Stack Development Online Courses [2023]</h5>
            <p className='card-text text-secondary'>Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand</p>
          </div>
        </Link>
      </div>

      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/fsd/card2' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-768x402.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title black'>The Ultimate Guide to Real-World Full-Stack Development Applications</h5>
            <p className='card-text text-secondary'>Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can</p>
          </div>
        </Link>
      </div>

      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/fsd/card3' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-768x402.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title black'>The Top 10 Tools Every Full-Stack Developer Should Master in 2023</h5>
            <p className='card-text text-secondary'>‍As a full-stack developer, having the right set of tools is crucial for your success.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
