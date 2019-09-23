import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.style.css';
import playingIcon from '../../assets/home.png';
import theaterIcon from '../../assets/theater.png';
import upcomingIcon from '../../assets/comingsoon.png';
import mtixIcon from '../../assets/mtix.png';
import PATH from '../../app.url';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <Link to={PATH.HOME}>
          <div className="footer-menu">
            <img className="footer-menu-icon" src={playingIcon} alt="Playing's icon"></img>
            <span className="footer-item-label">Playing</span>
          </div>
        </Link>
        <Link to={PATH.THEATER}>
          <div className="footer-menu">
            <img className="footer-menu-icon" src={theaterIcon} alt="Theater's icon"></img>
            <span className="footer-item-label">Theater</span>
          </div>
        </Link>
        <Link to={PATH.UP_COMING}>
          <div className="footer-menu">
            <img className="footer-menu-icon" src={upcomingIcon} alt="Upcoming's icon"></img>
            <span className="footer-item-label">Up Coming</span>
          </div>
        </Link>
        <Link to={PATH.MY_MTIX}>
          <div className="footer-menu">
            <img className="footer-menu-icon" src={mtixIcon} alt="My M-tix's icon"></img>
            <span className="footer-item-label">My M-Tix</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
