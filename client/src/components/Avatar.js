import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import avatar from '../assets/download.png';

const styles = {
  root: {
    width: '152px',
    borderRadius: '50%',
    boxShadow: '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
  },
};

function Avatar({ classes, className, ...other }) {
  return (
    <img src={avatar} alt="Profile" className={classNames(classes.root, className)} {...other} />
  );
}

export default injectSheet(styles)(Avatar);
