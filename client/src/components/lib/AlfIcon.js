import React from 'react';
import PropTypes from 'prop-types';

function AlfIcon({
  size,
  path: AlfIconComponent,
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
  path: PropTypes.any.isRequired,
  style: PropTypes.object,
};

AlfIcon.defaultProps = {
  size: 1,
  style: {},
};

export default AlfIcon;
