import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Cyber() {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <div className='card-group'>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/cyber/card1Cy' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>What Is Hacking? Types of Hacking & More</h5>
            <p className='card-text text-secondary'>Have you ever wondered what hacking is all about? It’s a big deal in today’s</p>
          </div>
        </Link>
      </div>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/cyber/card2Cy' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Cybersecurity Vs Ethical Hacking: Top 10 Differences</h5>
            <p className='card-text text-secondary'>Cybersecurity & Ethical hacking and have been key in making sure that your data online</p>
          </div>
        </Link>
      </div>
      </div>
   
  );
}
