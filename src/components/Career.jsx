import React from 'react'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Career({career}) {
 return (
    <div className="container mt-4">
      <h1 className="text-center mb-5">Browse Our Card Collection</h1>
      <div className="row">
        {career.map((data, i) => (
          <div className="col-md-4" key={i}>
            <div className="card mb-4  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}">
              <img src={data.src} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}
