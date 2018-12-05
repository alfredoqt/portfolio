import React from 'react';
import TechnologyLink from './TechnologyLink';

import Icon from '@mdi/react';
import {
  mdiIframeOutline,
  mdiJson
} from '@mdi/js';

function Skills() {
  return (
    <div
      style={{
        padding: '3rem'
      }}
    >
      <h1
        style={{
          color: '#283e4a',
          textTransform: 'uppercase',
          fontSize: '4.8rem',
          marginBottom: '2rem',
        }}
      >
        Skills
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '50%',
        }}>
          <TechnologyLink
            name="js"
            icon
          />
          <TechnologyLink
            name="cpp"
            icon
          />
          <TechnologyLink
            name="html"
            icon
          />
          <TechnologyLink
            name="css"
            icon
          />
          <TechnologyLink
            name="react"
            icon
          />
          <TechnologyLink
            name="redux"
            icon
          />
          <TechnologyLink
            name="rxjs"
            icon
          />
          <TechnologyLink
            name="socket-io"
            icon
          />
          <TechnologyLink
            name="node"
            icon
          />
          <TechnologyLink
            name="mongo"
            icon
          />
          <TechnologyLink
            name="git"
            icon
          />
        </div>
      </div>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        I have experience developing web applications for two years.
        {' '}
        I worked in the back-end and front-end codebases of projects in small teams.
        {' '}
        I also developed mobile applications leveraging the back-end to Backend Services such as Firebase.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        My current stack is React, Redux, Socket.IO, React Native, Node.js, MongoDB and some of the technologies and frameworks related to them.
        {' '}
        However, I will use whatever gets the job done.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        I can contribute on the front-end and back-end of your projects, as well as DevOps.
        {' '}
        I am working on improving my UI/UX design skills to apply them in a professional environment.
      </p>
      <h2
        style={{
          display: 'flex',
          color: '#545454',
          fontSize: '2.4rem',
          fill: '#545454',
          alignItems: 'center',
          margin: '1rem 0',
        }}
      >
        <span>Front End Development</span>
        <Icon
          path={mdiIframeOutline}
          size={2.4}
          color="inherit"
          style={{
            margin: '0 15px',
          }}
        />
      </h2>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        My main focus is writing applications with React.
        {' '}
        Recently, I’ve been using Redux and Socket.IO to achieve real-time communication between connected clients.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        My experience:
      </p>
      <ul
        style={{
          listStyleType: 'circle',
          paddingLeft: '4rem',
          marginBottom: '1rem',
        }}
      >
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Development of scalable and reliable applications in JS. I have a good knowledge of libraries and frameworks such as React, Redux, RxJS, Redux-Observable and Socket.IO-client. I also developed small applications using Vanilla JS.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Implementation of Redux middleware to handle events sent by WebSocket servers.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Exposure to developing mobile applications with React Native, and Android Studio with Java.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >UI mockups design with Figma.</li>
      </ul>
      <h2
        style={{
          display: 'flex',
          color: '#545454',
          fontSize: '2.4rem',
          fill: '#545454',
          alignItems: 'center',
          margin: '1rem 0',
        }}
      >
        <span>Back End Development</span>
        <Icon
          path={mdiJson}
          size={2.4}
          color="inherit"
          style={{
            margin: '0 15px',
          }}
        />
      </h2>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        In the back-end side of things, my current stack is Node.js, MongoDB and Express.
        {' '}
        To achieve real-time functionality, I use Socket.IO which provides a layer of abstraction on top of WebSockets.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        In my first projects, I used PHP as a language to develop the servers.
        {' '}
        I decided to switch to Node.js due to a higher growing community and availability of tools and frameworks.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        My experience:
      </p>
      <ul
        style={{
          listStyleType: 'circle',
          paddingLeft: '4rem',
          marginBottom: '1rem',
        }}
      >
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Development of RESTful APIs to provide data to the front-end side.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Integration of payment processing APIs to process orders.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Development of Publish/Subscribe servers to emit and broadcast messages in real-time using Socket.IO.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Refactoring of applications into microservices to decouple database access.</li>
        <li
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '.4rem',
          }}
        >Deployment of secure websites using Let's Encrypt and deployment of subdomains.</li>
      </ul>
    </div>
  );
}

export default Skills;
