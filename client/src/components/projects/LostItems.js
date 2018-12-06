import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import liOne from '../../assets/projects/lost-items/1.png';
import liTwo from '../../assets/projects/lost-items/2.png';
import liThree from '../../assets/projects/lost-items/3.png';
import liFour from '../../assets/projects/lost-items/4.png';
import liFive from '../../assets/projects/lost-items/5.png';
import liSix from '../../assets/projects/lost-items/6.png';
import liSeven from '../../assets/projects/lost-items/7.png';
import liEight from '../../assets/projects/lost-items/8.png';
import StyledGrid from '../lib/Grid';

function LostItems() {
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
          Lost Items
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
          <TechnologyLink name="android-studio" />
          <TechnologyLink name="java" />
          <TechnologyLink name="firebase" />
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
            onClick={tryOut('https://github.com/AlfredoQT/LostItemsDemo')}
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
          Lost Items is a demo mobile application for Android that allows users to register their lost items at any spot using the Google Maps API. It also allows other users to update the status of other users’ items.
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
          I decided to make this app as a final project for a mobile class because I tend to forget where I put my stuff. I wrote an Android application using Java that talks to a Firebase server to store information about users and about the status and location of their registered items. It features:
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
          >Real-time updates of users’ feed and items status using Firestore’s real-time functionality.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >User authentication handled by Firebase Auth.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Integration of Google Maps API to allow users to indicate where they lost their items and to see all the items lost by all users in the world.</li>
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
          >Setup of a Firebase server.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >ntegration of Google Maps API.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Integration of Firestore’s real-time features.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Development of a Java application for Android Studio using asynchronous programming, Fragments, Intents, Onboarding UX.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Integration of third party libraries for some UI components of the app.</li>
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
              src={liOne}
              alt="Lost Items One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liTwo}
              alt="Lost Items Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liThree}
              alt="Lost Items Three"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liFour}
              alt="Lost Items Four"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liFive}
              alt="Lost Items Five"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liSix}
              alt="Lost Items Six"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liSeven}
              alt="Lost Items Seven"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item sm={12} md={6}>
            <img
              src={liEight}
              alt="Lost Items Eight"
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

export default LostItems;
