import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ gridTemplateColumns: '150px auto' }}>
      <Link id="logo_link" to="/">
        <img
          className="logo"
          src="images/myfitjourneylogo.png"
          alt="My fit journey Logo"
        />
      </Link>
      <nav>
        <Link to="/">INICIO</Link>
        <Link to="/fitness">FITNESS</Link>
        <Link to="/health">SALUD</Link>
        <Link to="/contact">CONTACTO</Link>
      </nav>
    </header>
  );
}

export default Header;
