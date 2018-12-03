import React from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from './Avatar';

class Person extends React.Component {

  navigateToMain = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
      }}>
        <Avatar
          style={{
            marginBottom: '15px',
            cursor: 'pointer',
          }}
          onClick={this.navigateToMain}
        />
        <div
          style={{
            cursor: 'pointer',
          }}
          onClick={this.navigateToMain}
        >
          <p style={{
            color: '#c7d1d8',
            marginBottom: '10px',
            textTransform: 'uppercase',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>Alfredo Quintero</p>
          <p style={{
            color: '#c7d1d8',
            textTransform: 'uppercase',
            fontSize: '1.4rem',
            textAlign: 'center',
          }}>Full Stack Developer</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Person);
