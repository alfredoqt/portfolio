import React from 'react';

import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';

function SkillsScreen() {
  return (
    <>
      <Sidebar />
      <div
          style={{
            marginLeft: '20%',
          }}
        >
        <Skills />
      </div>
    </>
  );
}

export default SkillsScreen;
