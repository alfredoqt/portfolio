import React from 'react';

import Person from './Person';
import NavigationLinkList from './NavigationLinkList';
import SocialLinks from './SocialLinks';

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
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Person />
      <NavigationLinkList style={{
        flex: 1,
      }}/>
      <SocialLinks />
    </aside>
  );
}

export default Sidebar;
