import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import injectSheet from 'react-jss';

export const styles = {
    /* Styles applied to the root element. */
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent', // Reset default value
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 'none',
        border: 0,
        margin: 0, // Remove the margin in Safari
        borderRadius: 0,
        padding: 0, // Remove the padding in Firefox
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        '-moz-appearance': 'none', // Reset
        '-webkit-appearance': 'none', // Reset
        textDecoration: 'none',
        // So we take precedent over the style of a native <a /> element.
        color: 'inherit',
    },
};


/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
class ButtonBase extends React.Component {

    render() {
        const {
            children,
            classes,
            className: classNameProp,
            component,
            tabIndex,
            type,
            ...other
        } = this.props;

        const className = classNames(
            classes.root,
            classNameProp,
        );

        let ComponentProp = component;

        if (ComponentProp === 'button' && other.href) {
            ComponentProp = 'a';
        }

        const buttonProps = {};
        if (ComponentProp === 'button') {
            buttonProps.type = type || 'button';
        } else {
            buttonProps.role = 'button';
        }

        return (
            <ComponentProp
                className={className}
                tabIndex={tabIndex}
                {...buttonProps}
                {...other}
            >
                {children}
            </ComponentProp>
        );
    }
}

ButtonBase.propTypes = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
    classes: PropTypes.object.isRequired,
    /**
   * @ignore
   */
    className: PropTypes.string,
    /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
    type: PropTypes.string,
};

ButtonBase.defaultProps = {
    component: 'button',
    tabIndex: '0',
    type: 'button',
};

export default injectSheet(styles)(ButtonBase);
