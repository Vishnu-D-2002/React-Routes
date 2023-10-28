import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import Career from './components/Career';
import Cyber from './components/Cyber';
import Fsd from './components/Fsd';
import Datascience from './components/Datascience'

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
              <div className="mobile-menu d-inline-block">
                <Link to='/' style={{ padding: 10 }} onClick={toggleMenu}>
                  ALL
                </Link>
                <Link to='/fsd' className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  FULL STACK DEVELOPMENT
                </Link>
                <Link to='/datascience'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  DATA SCIENCE
                </Link>
                <Link to='/cyber'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
                  CYBER SECURITY
                </Link>
                <Link to='/career'className='d-inline-block' style={{ padding: 10 }} onClick={toggleMenu}>
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
            <hr />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/fsd' element={<Fsd />} />
          <Route path='/datascience' element={<Datascience />} />
          <Route path='/cyber' element={<Cyber />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
