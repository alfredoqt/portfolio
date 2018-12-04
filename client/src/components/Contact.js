import React from 'react';
import injectSheet from 'react-jss';

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
  input: {
    width: '100%',
    padding: '12px 10px',
    fontSize: '1.6rem',
  },
};

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    message: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (value) => () => {
    this.setState({ [value]: value });
  };

  render() {
    const { classes } = this.props;
    const { name, email, message } = this.state;
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
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your name..."
              value={name}
              onChange={this.handleChange('name')}
              className={classes.input}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Your email..."
              value={email}
              onChange={this.handleChange('email')}
              className={classes.input}
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
              value={message}
              onChange={this.handleChange('message')}
            />
          </div>
          <button type="submit" className={classes.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default injectSheet(styles)(Contact);
