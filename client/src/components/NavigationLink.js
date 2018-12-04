import React from 'react';
import Icon from '@mdi/react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import theme from './lib/theme';

const styles = {
  root: {
    padding: '8px 0',
    color: '#c7d1d8',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fill: '#c7d1d8',
    transition: theme.transitions.create(['color', 'fill', 'borderLeft']),
    borderLeft: '0rem',
    '&:hover': {
      color: 'white',
      fill: 'white',
      borderLeft: '.3rem solid white',
    }
  },
  active: {
    color: 'white',
    fill: 'white',
    borderLeft: '.3rem solid white',
  },
};

function NavigationLink({
    name,
    icon,
    onClick,
    classes,
    active,
}) {
    const className = classNames(
      classes.root,
      {
        [classes.active]: active,
      },
    );
    return (
        <div
          className={className}
          onClick={onClick}
        >
            <Icon path={icon}
              size={1.4}
              color="inherit"
              style={{
                margin: '0 15px',
              }}
            />
            <span
              style={{
                fontSize: '1.6rem',
                textTransform: 'capitalize',
              }}
            >
              {name}
            </span>
          </div>
    );
}

export default injectSheet(styles)(NavigationLink);
