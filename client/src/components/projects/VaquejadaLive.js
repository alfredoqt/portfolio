import React from 'react';
import Icon from '@mdi/react';
import { mdiTrophy, mdiImage } from '@mdi/js';
import TechnologyLink from '../TechnologyLink';
import Button from '../lib/Button';

import vlOne from '../../assets/projects/vaquejada/1.png';
import vlTwo from '../../assets/projects/vaquejada/2.png';
import vlThree from '../../assets/projects/vaquejada/3.png';
import vlFour from '../../assets/projects/vaquejada/4.png';
import vlFive from '../../assets/projects/vaquejada/5.png';
import vlSix from '../../assets/projects/vaquejada/6.png';
import vlSeven from '../../assets/projects/vaquejada/7.png';
import StyledGrid from '../lib/Grid';

function VaquejadaLive() {
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
          Vaquejada Live
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
          <TechnologyLink name="react" />
          <TechnologyLink name="redux" />
          <TechnologyLink name="socket-io" />
          <TechnologyLink name="rxjs" />
          <TechnologyLink name="node" />
          <TechnologyLink name="mongo" />
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
            onClick={tryOut('https://www.vaquejadalive.com')}
            style={{
              marginRight: '0.8rem',
            }}
          >
            Try it out!
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
          Vaquejada Live is a platform that automates most of the tasks required to make a competition for a sport in Brazil called Vaquejada.
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
          A colleague and I saw an opportunity in a sport in Brazil called Vaquejada, since most of the processes were done in paper. In order for a competitor to register for a competition, he had to go to the competition site and talk to a registration officer in order to be registered for the competition and pay for the registrations. The competition owner then had to pay the Brazilian Association of Vaquejada (ABVAQ) the taxes per registration, and since this was a manual process, the association had the feeling that the owners were keeping the taxes for themselves. There was also another issue: the announcers and judges inside a competition needed another person that communicated the scores of each competitor, and they were all stored in paper.
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
          That is why we decided to make Vaquejada Live. What we are working:
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
          >Allow competition owners to make competitions inside a web application with any set of rules for each category.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Allow the owners to upload the necessary documents so that their competitions are approved by the ABVAQ and competitors can register.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Developed a module where the ABVAQ can see all the created competitions and approve them based on the uploaded documents.</li>
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
          >A real-time application which allows judges and announcers to obtain live competition results, as well as getting instant feedback on the scores of the competitors.</li>
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
          <span>Responsibilities / Achievements</span>
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
          >Permission-based user authentication.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Implementation of the marketplace using an external payment processing API.</li>
          <li
            style={{
              fontSize: '1.6rem',
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#131313',
              marginBottom: '.4rem',
            }}
          >Architecture of a messaging system that allows the clients to emit messages to the server, and the server to broadcast and emit messages back to the connected clients.</li>
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
              src={vlOne}
              alt="Vaqueja Live One"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlTwo}
              alt="Vaqueja Live Two"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlThree}
              alt="Vaqueja Live Three"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlFour}
              alt="Vaqueja Live Four"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlFive}
              alt="Vaqueja Live Five"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlSix}
              alt="Vaqueja Live Six"
              style={{
                width: '100%',
              }}
            />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <img
              src={vlSeven}
              alt="Vaqueja Live Seven"
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

export default VaquejadaLive;
