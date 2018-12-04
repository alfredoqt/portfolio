import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  date: {
    position: 'relative',
    paddingRight: '25px',
    fontSize: '14px',
    color: '#aaa',
    lineHeight: 2.4,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: 2,
      right: -17,
      display: 'block',
      width: '20px',
      height: '20px',
      border: '5px solid #999',
      borderRadius: '50%',
      background: '#cfc',
    },
  },
  content: {
    borderLeft: '5px solid #999',
  },
};

function Projects({ classes }) {
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
          >07/2015 - 07/2016</p>
          <p
            className={classes.content}
          >
            Twitter
            <span>
              Responsibilities: SEO, SEA, E-Mail Marketing
            </span>
          </p>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >07/2015 - 07/2016</p>
          <p
            className={classes.content}
          >
            Twitter
            <span>
              Responsibilities: SEO, SEA, E-Mail Marketing
            </span>
          </p>
        </li>
        <li
          style={{
            display: 'flex',
          }}
        >
          <p
            className={classes.date}
          >07/2015 - 07/2016</p>
          <p
            className={classes.content}
          >
            Twitter
            <span>
              Responsibilities: SEO, SEA, E-Mail Marketing
            </span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default injectSheet(styles)(Projects);
