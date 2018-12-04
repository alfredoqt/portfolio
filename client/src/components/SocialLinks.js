import React from 'react';
import injectSheet from 'react-jss';
import {
  mdiLinkedinBox,
  mdiGithubBox,
  mdiBitbucket,
} from '@mdi/js';
import Icon from '@mdi/react';

import theme from './lib/theme';

const styles = {
  iconContainer: {
    fill: '#c7d1d8',
    transition: theme.transitions.create(['fill']),
    '&:hover': {
      fill: 'white',
    }
  },
};

function SocialLinks({ classes }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1rem 0',
      }}
    >
      <a className={classes.iconContainer} href="https://bitbucket.org/AlfredoQT/">
        <Icon size={2.4} path={mdiBitbucket} color="inherit" />
      </a>
      <a className={classes.iconContainer} href="https://github.com/AlfredoQT">
        <Icon size={2.4} path={mdiGithubBox} color="inherit" />
      </a>
      <a className={classes.iconContainer} href="https://www.linkedin.com/in/alfredoquinterotlacuilo/">
        <Icon size={2.4} path={mdiLinkedinBox} color="inherit" />
      </a>
    </div>
  );
};

export default injectSheet(styles)(SocialLinks);
