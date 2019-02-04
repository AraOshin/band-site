import React from 'react';

const Header = props => (
  <div className={`header ${props.scrolled && 'scrolled-header'}`}>
    <img className="logo" src="/static/logo.png" alt=" " />
    <div className={`buttons ${props.scrolled && 'scrolled-buttons'}`}>


      <a className="button" href="https://facebook.com/">
        <i className="fab fa-facebook-square" href="facebook.com" />
      </a>

      <a className="button" href="https://spotify.com/">
        <i className="fab fa-spotify" />
      </a>


      <a className="button" href="https://instagram.com/">
        <i className="fab fa-instagram" />
      </a>


    </div>
  </div>
);

export default Header;
