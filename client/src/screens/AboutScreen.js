import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About';

class AboutScreen extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{
            marginLeft: '20%',
          }}
        >
          <About />
        </div>
      </>
    );
  }
}

export default AboutScreen;
