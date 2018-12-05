import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/skills" component={SkillsScreen} />
          <Route exact path="/projects" component={ProjectsScreen} />
          <Route exact path="/projects/:id" component={ProjectDetailsScreen} />
          <Route exact path="/contact" component={ContactScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
