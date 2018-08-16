import React from 'react';

const Nav = () => {
  return (
    <div className="w3-top">
      {/* <div className="w3-row w3-padding w3-blue">
        <div className="w3-col s3">
          <a href="#home" className="w3-button w3-block w3-blue w3-large padding-off">HOME</a>
        </div>
        <div className="w3-col s3">
          <a href="#about" className="w3-button w3-block w3-blue w3-large padding-off">ABOUT</a>
        </div>
        <div className="w3-col s3">
          <a href="#menu" className="w3-button w3-block w3-blue w3-large padding-off">MENU</a>
        </div>
        <div className="w3-col s3">
          <a href="#where" className="w3-button w3-block w3-blue w3-large padding-off">WHERE</a>
        </div>
      </div> */}
      <nav className="nav-wrapper">
        <ul className="nav-menu">
          <li className="nav-menu">
            <a href='#home' className="nav-text">
              <span>HOME</span>
              <span className='left'>HOME</span>
            </a>
          </li>
          <li className="nav-menu">
            <a href='#about' className="nav-text">
              <span>ABOUT</span>
              <span className='left'>ABOUT</span>
            </a>
          </li>
          <li className="nav-menu">
            <a href='#home' className="nav-text">
              <img className="nav-image" src='https://s.cdpn.io/47585/sdlogo.svg' alt="logo"/>
            </a>
          </li>
          <li className="nav-menu">
            <a href='#menu' className="nav-text">
              <span>MENU</span>
              <span className='right'>MENU</span>
            </a>
          </li>
          <li className="nav-menu">
            <a href='#where' className="nav-text">
              <span>WHERE</span>
              <span className='right'>WHERE</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className='bottom-border'></div>

    </div>
  );
};

export default Nav;