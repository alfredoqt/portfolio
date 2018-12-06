import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import miOne from '../../assets/projects/micro-invaders/1.png';
import miTwo from '../../assets/projects/micro-invaders/2.png';
import miThree from '../../assets/projects/micro-invaders/3.png';
import miFour from '../../assets/projects/micro-invaders/4.png';
import miFive from '../../assets/projects/micro-invaders/5.png';
import miSix from '../../assets/projects/micro-invaders/6.png';
import miSeven from '../../assets/projects/micro-invaders/7.png';
import miEight from '../../assets/projects/micro-invaders/8.png';
import miNine from '../../assets/projects/micro-invaders/9.png';
import miTen from '../../assets/projects/micro-invaders/10.png';
import miEleven from '../../assets/projects/micro-invaders/11.png';
import miTwelve from '../../assets/projects/micro-invaders/12.png';
import miThirteen from '../../assets/projects/micro-invaders/13.png';
import miFourteen from '../../assets/projects/micro-invaders/14.png';
import miFifteen from '../../assets/projects/micro-invaders/15.png';
import miSixteen from '../../assets/projects/micro-invaders/16.png';
import StyledGrid from '../lib/Grid';

function MicroInvaders() {
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
          Micro Invaders
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
          <TechnologyLink name="unity" />
          <TechnologyLink name="c-sharp" />
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
            onClick={tryOut('https://bitbucket.org/AlfredoQT/microinvaders')}
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
          Micro Invaders is a 2D platformer game. I collaborated in this project as a gameplay programmer.
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
          I collaborated in a team of six as a gameplay programmer to bring Micro Invaders to life. The game is written in C# following a component based architecture using the Unity Engine. The game aims to be a platformer with some of the mechanics of Contra, Super Mario Bros., and Hearts of Darkness. It includes weapon upgrades, mario style jumping, eight directional shooting and horrible monsters!
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
          >
            The development of the project gave me a good insight on how to approach a component-based architecture, which later helped me during the development of the recent projects.
          </li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >
            I learned how to effectively communicate inside a team. The level designer and I worked closely together to make fun levels.
          </li>
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
          <StyledGrid item sm={12} md={6}>
            <img
              src={miOne}
              alt="Micro Invaders One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miTwo}
              alt="Micro Invaders Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miThree}
              alt="Micro Invaders Three"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miFour}
              alt="Micro Invaders Four"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miFive}
              alt="Micro Invaders Five"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miSix}
              alt="Micro Invaders Six"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miSeven}
              alt="Micro Invaders Seven"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miEight}
              alt="Micro Invaders Eight"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miNine}
              alt="Micro Invaders Nine"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miTen}
              alt="Micro Invaders Ten"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miEleven}
              alt="Micro Invaders Eleven"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miTwelve}
              alt="Micro Invaders Twelve"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miThirteen}
              alt="Micro Invaders Thirteen"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miFourteen}
              alt="Micro Invaders Fourteen"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miFifteen}
              alt="Micro Invaders Fifteen"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={miSixteen}
              alt="Micro Invaders Sixteen"
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

export default MicroInvaders;
