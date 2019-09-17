import React, { Component } from 'react';
import logo21 from '../assets/21_Cineplex_logo.png';

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={logo21} alt="21's Logo"></img>
      </div>
    );
  }
}

export default Home;
