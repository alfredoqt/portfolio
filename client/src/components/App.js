import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/about" component={AboutScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
