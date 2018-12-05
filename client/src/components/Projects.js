import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';

import TechnologyLink from './TechnologyLink';

import theme from './lib/theme';
import Button from './lib/Button';


const styles = {
  date: {
    position: 'relative',
    paddingRight: '25px',
    fontSize: '1.4rem',
    color: 'rgba(0,0,0,0.6)',
    lineHeight: 2.4,
    flexShrink: 0,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 9,
      right: -9,
      display: 'block',
      width: '1.5rem',
      height: '1.5rem',
      border: '.2rem solid #283e4a',
      borderRadius: '50%',
      background: '#f5f5f5',
    },
  },
  projectTitle: {
    display: 'flex',
    color: theme.palette.primary.main,
    fontSize: '2.4rem',
    fill: theme.palette.primary.main,
    alignItems: 'center',
    marginTop: '0.4rem',
    marginBottom: '1rem',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  content: {
    borderLeft: '.2rem solid #283e4a',
    paddingLeft: '2rem',
  },
};

function Projects({ classes, history }) {
  function navigate(project) {
    return function() {
      history.push(`/projects/${project}`);
    }
  };

  function tryOut(url) {
    return function() {
      window.open(url);
    }
  }

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
        Projects
      </h1>
      <ul>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >07/2018 - 12/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('vaquejada-live')}
            >
              Vaquejada Live
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
              Vaquejada Live is a platform that automates most of the tasks required to make a competition for a sport in Brazil called Vaquejada.
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
              >Allows competition owners to create competitions.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Approval of official competitions.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >A marketplace where competitors can register for competitions and make online and offline payments.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Allows workers inside a competition to get real-time updates on the status of the competition, such as: scores of competitors, classified competitors and live results.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Implementation of a publish/subscribe server architecture to allow emission and broadcasting of messages between clients and server.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('vaquejada-live')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={tryOut('https://vaquejadalive.com/')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                Try it out!
              </Button>
            </div>
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
              <TechnologyLink name="react" />
              <TechnologyLink name="redux" />
              <TechnologyLink name="socket-io" />
              <TechnologyLink name="rxjs" />
              <TechnologyLink name="node" />
              <TechnologyLink name="mongo" />
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >08/2018 - 10/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('shaders-programming')}
            >
              Shaders Programming
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
              During my time at Vancouver Film School, I learned the fundamentals of shader development with tools like ShaderToy, Unity and PicoGL.js. Here is a compilation of the projects that I did.
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
              >Implementation of Vertex Shaders and Pixel Shaders.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Use of PicoGL.js to abstract WebGL functionality.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('shaders-programming')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
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
            </div>
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
              <TechnologyLink name="js"/>
              <TechnologyLink name="picogl"/>
              <TechnologyLink name="unity"/>
              <TechnologyLink name="shader-toy"/>
              <TechnologyLink name="glsl"/>
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >08/2018 - 10/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('web-doom')}
            >
              Web Doom
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
              WebDoom is a game written in JS that uses raytracing techniques to render a 3D Doom like level. Try it out with your FPS meter!
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
              >The existing game was optimized and now runs at 50.0 FPS.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Optimized the rendering of the rain.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('web-doom')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={tryOut('https://alfredoqt.com/web-doom')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                Try it out!
              </Button>
            </div>
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
              <TechnologyLink name="jQuery" />
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >08/2018 - 10/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('web-music-player')}
            >
              Web Music Player
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
              This web music player allows you to play a set of songs inside your browser.
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
              >Use of Firebase as BaaS to serve the songs.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Integration of Howler.js to play the songs.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('web-music-player')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={tryOut('https://alfredoqt.github.io/WebMusicPlayer')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                Try it out!
              </Button>
            </div>
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
              <TechnologyLink name="react" />
              <TechnologyLink name="howler" />
              <TechnologyLink name="firebase" />
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >06/2015 - 08/2016</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('lost-items')}
            >
              Lost Items
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
              Lost Items is a demo mobile application for Android that allows users to register their lost items at any spot using the Google Maps API. It also allows other users to update the status of other users’ items.
              {' '}
              The items feed is updated in real-time using Firebase’s Firestore real-time features.
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
              >Integration of Google Maps API.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Integration of Firebase’s Firestore real-time features to allow real-time updates.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('lost-items')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
            </div>
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
              <TechnologyLink name="android-studio" />
              <TechnologyLink name="java" />
              <TechnologyLink name="firebase" />
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >04/2018 - 06/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('micro-invaders')}
            >
              Micro Invaders
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
              Micro Invaders is a 2D platformer game. I collaborated in this project as a gameplay programmer.
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
              >Implementation of core gameplay mechanics: 8 directional shooting, weapon upgrades, enemies behavior.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Implemented a trigger system that allowed multiple events to happen depending on the player’s actions.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('micro-invaders')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
            </div>
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
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >04/2018 - 06/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('let-them-come')}
            >
              Let Them Come
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
              Let Them Come is a game written in C++. It consists of a turret defending itself from bullets coming in. It features:
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
              >Game Object Handlers for game objects memory management. The object handlers are stored in the stack and those check whether its game object stored in the heap is still valid by checking if it is contained in a HashMap.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Use of AlfiEngine, an engine that supports 2D rendering using both Simple Directmedia Layer and OpenGL written by me.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Collision system for circles.</li>            
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Component based architecture.</li>            
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('let-them-come')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
            </div>
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
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >02/2018 - 04/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('angry-pigs')}
            >
              Angry Pigs
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
              Angry Pigs is a game written in Vanilla JS that allows you to create levels and play them. This time the pigs destroy the birds, go and try it out here!
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
              >Integration of Box2D.js to support physics inside the game.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >A level editor that allows any person to create any type of level and play it online.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Gameplay features such as lifespan and health.</li>       
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('angry-pigs')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
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
            </div>
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
              <TechnologyLink name="node" />
              <TechnologyLink name="jQuery" />
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >02/2018 - 04/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('pong')}
            >
              Pong
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
              Pong is a game written in C++ that is similar to the Atari’s version. It features:
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
              >Collision checking between circles and rectangles.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >2D rendering with Simple Directmedia Layer.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('pong')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
            </div>
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
            </div>
          </div>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >01/2018 - 02/2018</p>
          <div className={classes.content}>
            <h2
              className={classes.projectTitle}
              onClick={navigate('battleships')}
            >
              Battleships
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
              Battleships is a game written in Vanilla JS, this project helped me found my passion for web development. Go and check out my first project!
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
              >Integration of sounds.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Random placement of ships.</li>
              <li
                style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                  color: '#131313',
                  marginBottom: '.4rem',
                }}
              >Score saving.</li>
            </ul>
            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={navigate('battleships')}
                style={{
                  marginRight: '0.8rem',
                }}
              >
                More Details
              </Button>
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
            </div>
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
          </div>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(injectSheet(styles)(Projects));
