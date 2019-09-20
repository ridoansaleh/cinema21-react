import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import homeLogo from '../../assets/home.png';
import mtixLogo from '../../assets/mtix.png';
import termsLogo from '../../assets/icon-term-of-service.png';
import faqLogo from '../../assets/icon-faq.png';
import privacyPolicyLogo from '../../assets/icon-privacy-policy.png';
import contactLogo from '../../assets/contact.png';
import infoLogo from '../../assets/info.png';
import aboutLogo from '../../assets/theater.png';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar-container">
      <div className="welcome-user">Welcome, Guest</div>
      <ul>
        <li>
          <img className="sidebar-logo" src={homeLogo} alt="Home's logo" /> Home
        </li>
        <li className="sidebar-mtix">
          <div className="sidebar-list-special">
            <img className="sidebar-logo" src={mtixLogo} alt="MTix's logo" /> <span>M-Tix</span>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon className="submenu-icon" icon={faSignInAlt} /> Login
            </li>
            <li>
              <FontAwesomeIcon className="submenu-icon" icon={faUser} /> Registration
            </li>
            <li>
              <FontAwesomeIcon className="submenu-icon" icon={faCreditCard} /> Top Up M-Tix
            </li>
          </ul>
        </li>
        <li>
          <img className="sidebar-logo" src={termsLogo} alt="Term of Service's logo" /> Terms of
          Service
        </li>
        <li>
          <img className="sidebar-logo" src={faqLogo} alt="FAQ's logo" /> FAQ
        </li>
        <li>
          <img className="sidebar-logo" src={privacyPolicyLogo} alt="Privacy Policy's logo" />{' '}
          Privacy Policy
        </li>
        <li>
          <img className="sidebar-logo" src={contactLogo} alt="Contact's logo" /> Contact Us
        </li>
        <li>
          <img className="sidebar-logo" src={infoLogo} alt="Info's logo" /> Info 21
        </li>
        <li>
          <img className="sidebar-logo" src={aboutLogo} alt="About Us's logo" /> About Us
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
