import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { navigationLinks } from '../utils/constants';
import NavigationLink from './NavigationLink';

class NavigationLinkList extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    handleClick = (route) => {
        const { history } = this.props;
        if (route === 'resume') {
            window.open('https://alfredoqt.sfo2.digitaloceanspaces.com/Resume.pdf', '_self');
            return;
        }

        history.push(route);
    }

    shouldComponentUpdate(nextProps) {
        const { location } = this.props;
        const { location: nextLocation } = nextProps;
        const parentPath = location.pathname.split('/')[1];
        const nextParentPath = nextLocation.pathname.split('/')[1];
        return parentPath !== nextParentPath;
    }

    render() {
        const { location, style, className: classNameProp } = this.props;
        const parentPath = location.pathname.split('/')[1];
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                ...style,
              }} className={classNameProp}>
                { navigationLinks.map(el => (
                    <NavigationLink
                        name={el.name}
                        key={el.id}
                        icon={el.icon}
                        active={el.name === parentPath}
                        onClick={() => this.handleClick(el.name)}
                    />
                ))}
              </div>
        );
    }
}

export default withRouter(NavigationLinkList);
