import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Career() {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <div className='card-group'>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/career/carr' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Digital-Marketers.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Top Product-Based Companies for Digital Marketers</h5>
            <p className='card-text text-secondary'>Selecting the right launchpad for a successful career in digital marketing isn’t just about joining any company; it’s about aligning with those who are at the forefront of innovation. </p>
          </div>
        </Link>
      </div>

      </div>
   
  );
}
