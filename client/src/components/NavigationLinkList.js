import React from 'react';
import { navigationLinks } from '../utils/constants';
import NavigationLink from './NavigationLink';

function NavigationLinkList() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
            { navigationLinks.map(el => (
                <NavigationLink name={el.name} key={el.id} icon={el.icon} />
            ))}
          </div>
    );
}

export default NavigationLinkList;