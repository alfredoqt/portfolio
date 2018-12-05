import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import ButtonBase from './ButtonBase';
import theme from './theme';
import { capitalize } from '../../utils/helpers';
import { fade } from '../../utils/colorManipulator';

export const styles = {
    /* Styles applied to the root element. */
    root: {
        ...theme.typography.button,
        boxSizing: 'border-box',
        minWidth: 64,
        minHeight: 36,
        padding: '8px 16px',
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
            duration: theme.transitions.duration.short,
        }),
        '&:hover': {
            textDecoration: 'none',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
            '&$disabled': {
                backgroundColor: 'transparent',
            },
        },
        '&$disabled': {
            color: theme.palette.action.disabled,
        },
    },
    /* Styles applied to the span element that wraps the children. */
    label: {
        width: '100%', // assure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        fontSize: '1.6rem',
    },
    /* Styles applied to the root element if `variant="text"`. */
    text: {},
    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    border: `1px solid ${
      theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
    }`,
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
    contained: {
        backgroundColor: theme.palette.grey[300],
        '&$disabled': {
            color: theme.palette.action.disabled,
            backgroundColor: theme.palette.action.disabledBackground,
        },
        '&:hover': {
            backgroundColor: theme.palette.grey.A100,
            '@media (hover: none)': {
                backgroundColor: theme.palette.grey[300],
            },
            '&$disabled': {
                backgroundColor: theme.palette.action.disabledBackground,
            },
        },
    },
    containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            '@media (hover: none)': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
    containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.palette.secondary.main,
            },
        },
    },
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
        color: 'inherit',
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
        padding: '7px 8px',
        minWidth: 64,
        minHeight: 32,
        fontSize: '1rem',
        textTransform: 'none',
    },
    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
        padding: '8px 24px',
        minWidth: 112,
        minHeight: 40,
        fontSize: '15px',
    },
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
        width: '100%',
    },
};

class Button extends React.PureComponent {

    render() {
      const {
          children,
          classes,
          className: classNameProp,
          color,
          disabled,
          fullWidth,
          mini,
          size,
          variant,
          ...other
      } = this.props;
      const fab = variant === 'fab' || variant === 'extendedFab';
      const contained = variant === 'contained' || variant === 'raised';
      const text = variant === 'text' || variant === 'flat';
      const className = classNames(
          classes.root,
          {
              [classes.text]: text,
              [classes.textPrimary]: text && color === 'primary',
              [classes.textSecondary]: text && color === 'secondary',
              [classes.contained]: contained || fab,
              [classes.containedPrimary]: (contained || fab) && color === 'primary',
              [classes.containedSecondary]: (contained || fab) && color === 'secondary',
              [classes.outlined]: variant === 'outlined',
              [classes.outlinedPrimary]: variant === 'outlined' && color === 'primary',
              [classes.outlinedSecondary]: variant === 'outlined' && color === 'secondary',
              [classes[`size${capitalize(size)}`]]: size !== 'medium',
              [classes.disabled]: disabled,
              [classes.fullWidth]: fullWidth,
              [classes.colorInherit]: color === 'inherit',
          },
          classNameProp,
      );
      return (
          <ButtonBase
              className={className}
              disabled={disabled}
              {...other}
          >
              <span className={classes.label}>{children}</span>
          </ButtonBase>
      );
    }
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    /**
   * @ignore
   */
    className: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    mini: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
   * @ignore
   */
    type: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
};

Button.defaultProps = {
    color: 'default',
    component: 'button',
    disabled: false,
    fullWidth: false,
    mini: false,
    size: 'medium',
    type: 'button',
    variant: 'text',
};

export default injectSheet(styles)(Button);
