import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Alllist() {
  const linkStyle = {
    textDecoration: 'none' 
  };

  return (
    <div className='card-group'>
      <div className='card d-inline-block m-4 ' style={{ width: "18rem" }}>
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
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title black'>The Ultimate Guide to Real-World Full-Stack Development Applications</h5>
            <p className='card-text text-secondary'>Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can</p>
          </div>
        </Link>
      </div>

      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/fsd/card3' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title black'>The Top 10 Tools Every Full-Stack Developer Should Master in 2023</h5>
            <p className='card-text text-secondary'>‍As a full-stack developer, having the right set of tools is crucial for your success.</p>
          </div>
        </Link>
      </div>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/ds/card1Ds' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Top Product-Based Companies for Data Scientists in 2023</h5>
            <p className='card-text text-secondary'>We all know about the kind of buzz surrounding data science right now, it is</p>
          </div>
        </Link>
      </div>
      <div className='card d-inline-block m-4' style={{ width: "18rem" }}>
        <Link to='/ds/card1Ds' style={linkStyle}>
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp" className='card-img-top' alt="" />
          <div className='card-body'>
            <h5 className='card-title '>Useful Python Libraries & Tools for Data Science Beginners</h5>
            <p className='card-text text-secondary'>As the demand for data and the people that can conquer it, i.e. Data Scientists</p>
          </div>
        </Link>
      </div>
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
