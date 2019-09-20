import React, { Fragment, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Navbar.style.css';
import companyLogo from '../../assets/header.png';

const Navbar = () => {
  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    const el = document.getElementById('sidebar');
    const body = document.getElementsByTagName('body')[0];
    const handler = event => {
      if (event.target == html) {
        el.style.width = 0;
        body.style.background = '#fff';
      }
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const handleHamburgerClick = () => {
    const el = document.getElementById('sidebar');
    const body = document.getElementsByTagName('body')[0];
    el.style.width = '300px';
    body.style.background = 'rgba(0, 0, 0, 0.5)';
  };

  return (
    <Fragment>
      <div className="navbar-container">
        <div className="navbar-hamburger">
          <div className="hamburger-toggle-icon" onClick={handleHamburgerClick}>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
            <div className="icon-bar"></div>
          </div>
        </div>
        <div className="navbar-logo-wrapper">
          <img id="header-logo" src={companyLogo} alt="Cinema21's logo" />
        </div>
      </div>
      <Sidebar />
    </Fragment>
  );
};

export default Navbar;
