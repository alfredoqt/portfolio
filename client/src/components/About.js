import React from 'react';

function About() {
  return (
    <div
      style={{
        padding: '3rem 2rem'
      }}
    >
      <h2
        style={{
          color: '#283e4a',
          textTransform: 'uppercase',
          fontSize: '4.8rem',
          marginBottom: '2rem',
        }}
      >
        About Me
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
        I'm a Full Stack Web Developer with two years of programming experience.
        {' '}
        I enjoy learning new things and solving problems in an efficient and creative way.
        {' '}
        When I'm not coding, you'll find me reading horror and science fiction novels or working out.
      </p>
      <p
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontWeight: 300,
          color: '#131313',
        }}
      >
        I spend the last year doing projects
      </p>
    </div>
  );
}

export default About;
