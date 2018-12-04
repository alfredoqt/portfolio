import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import CircularProgress from './CircularProgress';
import Button from './Button';

const styles = {
  wrapper: {
      position: 'relative',
  },
  buttonSuccess: {
      backgroundColor: '#4CAF50',
      '&:hover': {
          backgroundColor: '#45a049',
      },
  },
  buttonProgress: {
      color: '#283e4a',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
  },
};

function ButtonProgress({ classes, loading, children, success, ...others }) {
    return (
        <div className={classes.wrapper}>
            <Button
                {...others}
                className={classNames({
                    [classes.buttonSuccess]: success,
                })}
            >
                {children}
            </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
    );
}

ButtonProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonProgress.defaultProps = {
  loading: false,
  success: false,
  className: null,
};

export default injectSheet(styles)(ButtonProgress);
