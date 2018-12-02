import React from 'react';

import welcome from '../assets/welcome-main.png';

function Welcome() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        /* The image used */
        background: `url(${welcome}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          marginTop: '10rem',
        }}
      >
        <p
          style={{
            color: '#131313',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '4.8rem',
            textShadow: '0px 2px 2px rgba(255, 255, 255, 0.4)',
            marginBottom: '.8rem',
            textAlign: 'center',
          }}
          >Hi, I'm Alfredo</p>
        <p
          style={{
            color: '#131313',
            fontSize: '3rem',
            textAlign: 'center',
            textShadow: '0px 2px 2px rgba(255, 255, 255, 0.4)',
          }}
        >
          Full stack developer with a passion for developing applications that improve people's lives
        </p>
      </div>
    </div>
  );
}

export default Welcome;
