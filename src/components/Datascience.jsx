import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Datascience() {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <div className='card-group'>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/ds/card1Ds' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Top Product-Based Companies for Data Scientists in 2023</h5>
            <p className='card-text text-secondary'>We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot!</p>
          </div>
        </Link>
      </div>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/ds/card2Ds' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Useful Python Libraries & Tools for Data Science Beginners</h5>
            <p className='card-text text-secondary'>As the demand for data and the people that can conquer it, i.e. Data Scientists</p>
          </div>
        </Link>
      </div>
      </div>
   
  );
}
