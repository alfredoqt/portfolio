import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import apOne from '../../assets/projects/angry-pigs/1.png';
import apTwo from '../../assets/projects/angry-pigs/2.png';
import apThree from '../../assets/projects/angry-pigs/3.png';
import StyledGrid from '../lib/Grid';

function AngryPigs() {
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
          Angry Pigs
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
          <TechnologyLink name="box-2d" />
          <TechnologyLink name="jQuery" />
          <TechnologyLink name="node" />
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
            onClick={tryOut('https://alfredoqt.com/angry-pigs')}
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
            onClick={tryOut('https://github.com/AlfredoQT/AngryPigs')}
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
          Angry Pigs is a game written in Vanilla JS that allows you to create levels and play them. This time the pigs destroy the birds, go and try it out here!
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
          In the first part of this project, I developed a level editor that allowed users to create levels with birds, a different amount of projectiles, and boxes of different sizes and textures. The server was originally written in PHP, and the levels were stored in JSON files. A colleague and I later took the project to the next step. We built a game that loads the levels from the level editor and allows players to go through all of them. The game’s physics are powered by Box2D.js.
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
          >Rendering of levels fetched from a server into a 2D world.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >First implementation of RESTful API.</li>
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
              src={apOne}
              alt="Angry Pigs One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={apTwo}
              alt="Angry Pigs Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={apThree}
              alt="Angry Pigs Three"
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

export default AngryPigs;
