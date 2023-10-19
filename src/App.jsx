import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Alllist from './components/Alllist';
import Fsd from './components/Fsd';
import Datascience from './components/Datascience';
import Cyber from './components/Cyber';
import Career from './components/Career';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card1Ds from './components/Card1Ds';
import Card2Ds from './components/Card2Ds';
import Card1Cy from './components/Card1Cy';
import Card2cy from './components/Card2cy';
import CardCar from './components/CardCar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <h1 className='text-center'>courses</h1>
      <Router>
        <div className='hello'>
          <div className="d-md-none">
            <button onClick={toggleMenu} className="menu-button">
              Menu
            </button>
            {menuOpen && (
              <div className="mobile-menu">
                <Link to='/' style={{ padding: 10 }} onClick={toggleMenu}>
                  ALL
                </Link>
                <Link to='/fsd' style={{ padding: 10 }} onClick={toggleMenu}>
                  FULL STACK DEVELOPMENT
                </Link>
                <Link to='/datascience' style={{ padding: 10 }} onClick={toggleMenu}>
                  DATA SCIENCE
                </Link>
                <Link to='/cyber' style={{ padding: 10 }} onClick={toggleMenu}>
                  CYBER SECURITY
                </Link>
                <Link to='/career' style={{ padding: 10 }} onClick={toggleMenu}>
                  CAREER
                </Link>
              </div>
            )}
          </div>
          <div className="d-none d-md-block">
            <Link to='/' style={{ padding: 10 }}>ALL</Link>
            <Link to='/fsd' style={{ padding: 10 }}>FULL STACK DEVELOPMENT</Link>
            <Link to='/datascience' style={{ padding: 10 }}>DATA SCIENCE</Link>
            <Link to='/cyber' style={{ padding: 10 }}>CYBER SECURITY</Link>
            <Link to='/career' style={{ padding: 10 }}>CAREER</Link>
            <hr />
          </div>
        </div>
        <Routes>
          {/* ... your route definitions ... */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;