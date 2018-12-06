import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import shOne from '../../assets/projects/shaders/1.png';
import shTwo from '../../assets/projects/shaders/2.png';
import shThree from '../../assets/projects/shaders/3.png';
import shFour from '../../assets/projects/shaders/4.png';
import shFive from '../../assets/projects/shaders/5.png';
import shSix from '../../assets/projects/shaders/6.png';
import shSeven from '../../assets/projects/shaders/7.png';
import StyledGrid from '../lib/Grid';

function Shaders() {
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
          Shaders
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
          <TechnologyLink name="picogl" />
          <TechnologyLink name="unity" />
          <TechnologyLink name="shader-toy" />
          <TechnologyLink name="glsl" />
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
            onClick={tryOut('https://alfredoqt.com/shaders')}
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
            onClick={tryOut('https://github.com/AlfredoQT/shaders')}
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
          During my time at Vancouver Film School, I learned the fundamentals of shader development with tools like ShaderToy, Unity and PicoGL.js. Here is a compilation of the projects that I did.
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
          Angelo Pesce, our instructor at Vancouver Film School, first taught us how to do pixel shaders using Shadertoy. Then, we did our own web version to learn more about vertex shaders using GLSL. Last, we learned how to render textures and different lighting techniques using HLSL with Unity.
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
            Fundamentals of Linear Algebra.
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
            Development of a playground using PicoGL.js and GLMatrix for the web.
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
            Development of pixel shaders with Shadertoy.
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
            Lightning techniques.
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
          <StyledGrid item xs={12}>
            <img
              src={shOne}
              alt="Shaders One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shTwo}
              alt="Shaders Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shThree}
              alt="Shaders Three"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shFour}
              alt="Shaders Four"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shFive}
              alt="Shaders Five"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shSix}
              alt="Shaders Six"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={shSeven}
              alt="Shaders Seven"
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

export default Shaders;
