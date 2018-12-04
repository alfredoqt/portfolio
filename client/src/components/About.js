import React from 'react';

function About() {
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
        About Me
      </h1>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
          marginBottom: '1rem',
        }}
      >
        I'm a Full Stack Web Developer with two years of programming experience.
        {' '}
        I enjoy learning new things and solving problems in efficient and creative ways.
        {' '}
        When I'm not coding, you'll find me reading horror and science fiction novels or working out.
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
        During this last year, I have been developing web applications using Vanilla JS, React, Redux and RxJS on the front end, and Node.js, Express and MongoDB on the backend.
        {' '}
        I have exposure to mobile application development using React Native and gameplay programming with C++ and C#.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
        }}
      >
        As a Web Developer, my passion is for developing applications that are meaningful to people's lives.
        {' '}
        I delight in building applications with real-time functionality.
        {' '}
        I am excited to work with a company that wants to make a big impact in the world.
      </p>
    </div>
  );
}

export default About;
