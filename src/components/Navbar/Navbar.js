import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
    <nav className="dt w-100 border-box pa3 ph5-ns">
      <div className="dtc v-mid link dim w-25">
        <Link to="/">
          <i className="fas fa-lg fa-home dib w2 h2 br-100 dark-gray"></i>
        </Link>
      </div>

      <div className="dtc v-mid w-75 tr">
        <div className="link dim f6 f5-ns dib mr3 mr4-ns">
          <Link to="/about">
            <i className="fas fa-lg fa-info dark-gray"></i>
          </Link>          
        </div>
        <div className="link dim f6 f5-ns dib">
          <Link to="/projects">
            <i className="fas fa-lg fa-code-branch dark-gray"></i>
          </Link>
        </div>
      </div>
    </nav>
		
	)
}

export default Navbar;

