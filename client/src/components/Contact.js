import React from 'react';
import injectSheet from 'react-jss';
import ButtonProgress from './lib/ButtonProgress';

import { sendContact } from '../api';

const styles = {
  button: {
    backgroundColor: '#283e4a',
    color: 'white',
    border: 0,
    width: '100%',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '1.6rem',
    '&:hover': {
    },
  },
  inputContainer: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '1.6rem',
    border: '.1rem solid #283e4a',
    borderRadius: '.4rem',
    fontFamily: 'inherit',
  },
  label: {
    fontSize: '1.6rem',
    padding: '0 0 0.8rem 0.4rem',
    color: '#131313',
  },
};

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
    submitting: false,
    success: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    this.setState({ submitting: true }, async () => {
      try {
        await sendContact({ name, email, message });
        this.setState({ success: true, submitting: false });
      } catch (e) {
        // TODO: Do something
      }
    });
  };

  handleChange = (value) => (e) => {
    this.setState({ [value]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { name, email, message, submitting, success } = this.state;
    return (
      <div
        style={{
          padding: '3rem'
        }}
      >
        <h1
          style={{
            color: '#283e4a',
            textTransform: 'uppercase',
            fontSize: '4.8rem',
            marginBottom: '2rem',
          }}
        >
          Contact
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.inputContainer}>
            <label htmlFor="name" className={classes.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your name..."
              value={name}
              onChange={this.handleChange('name')}
              className={classes.input}
              required
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="email" className={classes.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email..."
              value={email}
              onChange={this.handleChange('email')}
              className={classes.input}
              required
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="message" className={classes.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
              value={message}
              onChange={this.handleChange('message')}
              required
              className={classes.input}
              rows={4}
            />
          </div>
          <ButtonProgress
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            success={success}
            loading={submitting}
            disabled={submitting}
          >
            Submit
          </ButtonProgress>
        </form>
      </div>
    );
  }
}

export default injectSheet(styles)(Contact);
