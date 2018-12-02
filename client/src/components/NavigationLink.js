import React from 'react';
import Icon from '@mdi/react';

function NavigationLink({
    name,
    icon,
}) {
    return (
        <div style={{
            padding: '8px 0',
            color: '#c7d1d8',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Icon path={icon}
              size={1.4}
              color="#c7d1d8"
              style={{
                margin: '0 15px',
              }}/>
            <span
              style={{
                fontSize: '1.6rem',
              }}
            >
              {name}
            </span>
          </div>
    );
}

export default NavigationLink;
