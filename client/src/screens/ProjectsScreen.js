import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';

class ProjectsScreen extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div
          style={{
            marginLeft: '20%',
          }}
        >
          <Projects />
        </div>
      </>
    );
  }
}

export default ProjectsScreen;
