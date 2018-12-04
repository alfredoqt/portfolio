import React from 'react';
import PropTypes from 'prop-types';

function AlfIcon({
  size,
  name: AlfIconComponent,
  style,
  ...rest
}) {
  return (
    <AlfIconComponent style={{
      width: `${size * 1.5}rem`,
      ...style,
    }} {...rest} />
  )
}

AlfIcon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.node.isRequired,
  style: PropTypes.object,
};

AlfIcon.defaultProps = {
  size: 1,
  style: {},
};

export default AlfIcon;
