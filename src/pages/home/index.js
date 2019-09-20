import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import City from './City';
import Announcement from './Announcement';
import Movies from './Movies';
import Footer from '../../components/Footer';
// import logo21 from '../../assets/21_Cineplex_logo.png';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <City />
      <Announcement />
      <Movies />
      <Footer />
    </Fragment>
  );
};

export default Home;
