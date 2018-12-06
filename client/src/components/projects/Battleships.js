import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import bsOne from '../../assets/projects/battleships/1.png';
import bsTwo from '../../assets/projects/battleships/2.png';
import StyledGrid from '../lib/Grid';

function Battleships() {
  function tryOut(url) {
    return function() {
      window.open(url);
    }
  }
  return (
    <div
      style={{
        padding: '3rem',
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
          Battleships
      </h1>
      <section>
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#283e4a',
              marginRight: '0.8rem',
            }}
          >
            Stack:
          </span>
          <TechnologyLink name="js" />
          <TechnologyLink name="howler" />
          <TechnologyLink name="jQuery" />
        </div>
        <div
          style={{
            margin: '2rem 0',
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={tryOut('https://alfredoqt.com/battleships')}
            style={{
              marginRight: '0.8rem',
            }}
          >
            Try it out!
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={tryOut('https://github.com/AlfredoQT/battleships')}
            style={{
              marginRight: '0.8rem',
            }}
          >
            Source code!
          </Button>
        </div>
      </section>
      <section
      >
        <p
          style={{
            fontSize: '1.6rem',
            lineHeight: 1.6,
            fontWeight: 300,
            color: '#131313',
            marginBottom: '1rem',
          }}
        >
          Battleships is a game written in Vanilla JS, this project helped me found my passion for web development. Go and check out my first project!
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
          This was one of my first web projects. It is a single player battleships game where the objective is to destroy all the randomly placed fleet in the ocean. The game provides a lot of feedback to the user with music and sound effects.
        </p>
      </section>
      <section>
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
          <span>Learning Outcomes / Achievements</span>
          <Icon
            path={mdiTrophy}
            size={2.4}
            color="inherit"
            style={{
              margin: '0 15px',
            }}
          />
        </h2>
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
          >Object Oriented Programming with Vanilla JS.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Sound edition and integration into web application.</li>
        </ul>
      </section>
      <section>
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
          <span>Gallery</span>
          <Icon
            path={mdiImage}
            size={2.4}
            color="inherit"
            style={{
              margin: '0 15px',
            }}
          />
        </h2>
        <StyledGrid container spacing={24}>
          <StyledGrid item xs={12}>
            <img
              src={bsOne}
              alt="Battleships One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={bsTwo}
              alt="Battleships Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
        </StyledGrid>
      </section>
    </div>
  );
}

export default Battleships;
