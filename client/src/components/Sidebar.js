import React from 'react';
import Avatar from './Avatar';

import Icon from '@mdi/react'
import { mdiAccount, mdiFileDocumentOutline, mdiEmail, mdiNewspaper, mdiPoll } from '@mdi/js'
import NavigationLinkList from './NavigationLinkList';

function Sidebar() {
  return(
    <aside style={{
      backgroundColor: '#283e4a',
      width: '20%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
      }}>
        <Avatar style={{
          marginBottom: '15px',
        }}/>
        <p style={{
          color: '#c7d1d8',
          marginBottom: '10px',
          textTransform: 'uppercase',
          fontSize: '20px',
          fontWeight: 'bold',
        }}>Alfredo Quintero</p>
        <p style={{
          color: '#c7d1d8',
          textTransform: 'uppercase',
        }}>Full Stack Developer</p>
      </div>
      <NavigationLinkList />
    </aside>
  );
}

export default Sidebar;
