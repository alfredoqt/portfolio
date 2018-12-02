import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Sidebar />
          <Welcome />
        </div>
      </>
    );
  }
}

export default App;
