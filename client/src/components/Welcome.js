import React from 'react';

import welcome from '../assets/welcome.png';

function Welcome() {
  return (
    <div
      style={{
        /* The image used */
        background: `url(${welcome}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100%',
      }}
    >
      <div
        style={{
          padding: '8rem 3rem',
        }}
      >
        <h1
          style={{
            color: '#131313',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '4.8rem',
            textShadow: '0px 2px 2px rgba(255, 255, 255, 0.4)',
            marginBottom: '1.6rem',
          }}
          >Hi, I'm Alfredo</h1>
        <h2
          style={{
            color: '#131313',
            fontSize: '2.4rem',
            textShadow: '0px 2px 2px rgba(255, 255, 255, 0.4)',
          }}
        >
          Full stack developer with a passion for developing applications that improve people's lives.
        </h2>
      </div>
    </div>
  );
}

export default Welcome;
