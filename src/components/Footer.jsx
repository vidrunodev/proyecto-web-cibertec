import React from 'react';

function Footer() {
  return (
    <footer>
      <p>My Fit Journey © 2026</p>
      <div className="social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src="images/facebook.png" alt="fb icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src="images/twitter.png" alt="twitter icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src="images/instagram.png" alt="instagram icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
