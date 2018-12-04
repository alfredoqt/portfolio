import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/skills" component={SkillsScreen} />
          <Route path="/projects" component={ProjectsScreen} />
          <Route path="/contact" component={ContactScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
