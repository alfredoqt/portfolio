import React from 'react';
import PropTypes from 'prop-types';

function Icon({
  size,
  name: IconComponent,
  style,
  ...rest
}) {
  return (
    <IconComponent style={{
      width: `${size * 1.5}rem`,
      ...style,
    }} {...rest} />
  )
}

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: 1,
  style: {},
};

export default Icon;
