import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import theme from './lib/theme';

import Icon from '@mdi/react';
import {
  mdiReact,
  mdiNodejs,
  mdiDatabase,
  mdiGit,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageCpp,
} from '@mdi/js';

import AlfIcon from './lib/AlfIcon';
import { alfRedux, alfSocketIO, alfJavascript } from './lib/icons';
import rxjs from '../assets/rxjs.png';

const data = {
  'react': {
    name: 'React',
    ref: 'https://reactjs.org/',
    iconComponent: Icon,
    iconColor: '#61DBFB',
    icon: mdiReact,
  },
  'visual-studio': {
    name: 'Visual Studio',
    ref: 'https://visualstudio.microsoft.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'node': {
    name: 'Node.js',
    ref: 'https://nodejs.org/en/',
    iconComponent: Icon,
    iconColor: '#539E43',
    icon: mdiNodejs,
  },
  'mongo': {
    name: 'MongoDB',
    ref: 'https://www.mongodb.com/',
    iconComponent: Icon,
    iconColor: '#599735',
    icon: mdiDatabase,
  },
  'js': {
    name: 'Javascript',
    ref: 'https://www.javascript.com/',
    iconComponent: AlfIcon,
    iconColor: null,
    icon: alfJavascript,
  },
  'cpp': {
    name: 'C++',
    ref: 'http://www.cplusplus.com/',
    iconComponent: Icon,
    iconColor: '#1463a2',
    icon: mdiLanguageCpp,
  },
  'jQuery': {
    name: 'jQuery',
    ref: 'https://jquery.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'sdl': {
    name: 'SDL',
    ref: 'https://www.libsdl.org/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'howler': {
    name: 'Howler.js',
    ref: 'https://howlerjs.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'socket-io': {
    name: 'Socket.IO',
    ref: 'https://socket.io/',
    iconComponent: AlfIcon,
    iconColor: null,
    icon: alfSocketIO,
  },
  'rxjs': {
    name: 'RxJS',
    ref: 'https://rxjs-dev.firebaseapp.com/',
    iconComponent: 'img',
    iconColor: null,
    icon: rxjs,
  },
  'shader-toy': {
    name: 'Shadertoy',
    ref: 'https://www.shadertoy.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'glsl': {
    name: 'GLSL',
    ref: 'http://nehe.gamedev.net/article/glsl_an_introduction/25007/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'unity': {
    name: 'Unity',
    ref: 'https://unity3d.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'java': {
    name: 'Java',
    ref: 'https://www.java.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'android-studio': {
    name: 'Android Studio',
    ref: 'https://developer.android.com/studio/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'box-2d': {
    name: 'Box2D.js',
    ref: 'https://github.com/kripken/box2d.js/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'c-sharp': {
    name: 'C#',
    ref: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'redux': {
    name: 'Redux',
    ref: 'https://redux.js.org/',
    iconComponent: AlfIcon,
    iconColor: null,
    icon: alfRedux,
  },
  'picogl': {
    name: 'PicoGL.js',
    ref: 'https://tsherif.github.io/picogl.js/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'firebase': {
    name: 'Firebase',
    ref: 'https://firebase.google.com/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'opengl': {
    name: 'OpenGL',
    ref: 'https://www.opengl.org/',
    iconComponent: null,
    iconColor: null,
    icon: null,
  },
  'css': {
    name: 'CSS',
    ref: 'https://css-tricks.com/',
    iconComponent: Icon,
    iconColor: '#1572b6',
    icon: mdiLanguageCss3,
  },
  'html': {
    name: 'HTML',
    ref: 'https://www.w3schools.com/html/',
    iconComponent: Icon,
    iconColor: '#f1502f',
    icon: mdiLanguageHtml5,
  },
  'git': {
    name: 'Git',
    ref: 'https://git-scm.com/',
    iconComponent: Icon,
    iconColor: '#f1502f',
    icon: mdiGit,
  },
};

const styles = {
  root: {
    padding: '.6rem 1.2rem',
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.2rem',
    color: 'white',
    marginRight: '0.8rem',
    transition: theme.transitions.create(['background-color']),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    textDecoration: 'none',
  },
  iconLabel: {
    padding: '.6rem 1.2rem',
    backgroundColor: theme.palette.primary.main,
    fontSize: '1.2rem',
    color: 'white',
    transition: theme.transitions.create(['background-color']),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    textDecoration: 'none',
  }
};

function TechnologyLink({ name, classes, icon }) {
  const IconComponent = data[name].iconComponent;
  let iconComponentProps = {};
  if (IconComponent === 'img') {
    iconComponentProps = {
      alt: data[name].name,
      src: data[name].icon,
      style: {
        marginBottom: '.4rem',
      },
    };
  } else {
    iconComponentProps = {
      color: data[name].iconColor,
      size: 2.6,
      style: {
        marginBottom: '.4rem',
      },
      path: data[name].icon,
    };
  }
  if (icon) {
    return (
      <a
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '.8rem',
          textDecoration: 'none',
        }}
        href={data[name].ref}
      >
        <IconComponent
          {...iconComponentProps}
        />
        <span
          className={classes.iconLabel}
        >{data[name].name}</span>
      </a>
    );
  }
  return (
    <a href={data[name].ref} className={classes.root}>
      {data[name].name}
    </a>
  )
};

TechnologyLink.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.oneOf(Object.keys(data)).isRequired,
  icon: PropTypes.bool,
};

TechnologyLink.defaultProps = {
  icon: false,
};

export default injectSheet(styles)(TechnologyLink);
