import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Contact';

class ContactScreen extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{
            marginLeft: '20%',
          }}
        >
          <Contact />
        </div>
      </>
    );
  }
}

export default ContactScreen;
