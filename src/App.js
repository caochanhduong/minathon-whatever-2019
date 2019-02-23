import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Badge } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Are you OK?<Badge color="secondary">New</Badge></h1>
      <div className="container">
      <button type="button" className="btn btn-success btn-lg btn3d"><span className="glyphicon glyphicon-ok" /> YES</button>

      </div>
      <div className="container">
      <button type="button" className="btn btn-danger btn-lg btn3d"><span className="glyphicon glyphicon-remove" /> NO</button>
      </div>
      </div>
    );
  }
}

export default App;
