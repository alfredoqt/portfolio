import React from 'react';

import NavigationLinkList from './NavigationLinkList';
import Person from './Person';

function Sidebar() {
  return(
    <aside style={{
      backgroundColor: '#283e4a',
      width: '20%',
      height: '100vh',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 2,
    }}>
      <Person />
      <NavigationLinkList />
    </aside>
  );
}

export default Sidebar;
