import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge } from 'reactstrap';
import RedirectMain from './RedirectMain';
import './MainScreen.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <RedirectMain />
      </Router>
    );
  }
}

export default App;
