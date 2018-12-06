import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import ltcOne from '../../assets/projects/let-them-come/1.png';
import ltcTwo from '../../assets/projects/let-them-come/2.png';
import ltcThree from '../../assets/projects/let-them-come/3.png';
import ltcFour from '../../assets/projects/let-them-come/4.png';
import StyledGrid from '../lib/Grid';

function LetThemCome() {
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
          Let Them Come
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
          <TechnologyLink name="cpp" />
          <TechnologyLink name="visual-studio" />
          <TechnologyLink name="sdl" />
          <TechnologyLink name="opengl" />
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
            onClick={tryOut('https://github.com/AlfredoQT/TurretGame')}
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
          Let Them Come is a game written in C++. It consists of a turret defending itself from bullets coming in.
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
          This game is the product of my C++ knowledge.
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
          >Uses a 2D engine that I wrote using Simple Directmedia Layer to render simple 2D shapes.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Follows a component-based architecture where each component represents a part of a game object.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >The switching of weapons is implemented using a Finite State Machine and an Input Manager that listens to keyboard events.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >In this game, objects are destroyed frequently. The way the memory management works is that a game object, stored in the heap, is registered into a hash table of all the game objects. When a game object is to be destroyed by a collision, or any other event, it adds a Game Object Handle, stored in the stack, into an array of elements to be destroyed by the end of the frame. The method that destroys the game objects first asks the handle if the game object is still stored in the hash table. If the game object pointer is present, then it is unregistered from the hash table and then removed from the heap. If the game object is invalid, it means that it was destroyed by one or more things in the same frame.</li>
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
          >Safe memory management.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Component-based architecture.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Implementation of a generic Hash Table in C++.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Advanced OOP concepts.</li>
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
              src={ltcOne}
              alt="Let Them Come One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={ltcTwo}
              alt="Let Them Come Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={ltcThree}
              alt="Let Them Come Three"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={ltcFour}
              alt="Let Them Come Four"
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

export default LetThemCome;
