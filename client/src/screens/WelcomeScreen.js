import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';

class WelcomeScreen extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            bottom: 0,
            width: '80%',
          }}
        >
          <Welcome />
        </div>
      </>
    );
  }
}

export default WelcomeScreen;
