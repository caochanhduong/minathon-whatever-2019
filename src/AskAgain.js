import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './MainScreen.css';
class AskAgain extends Component {
    render() {
        return (
            <div className="App">
            <h1 style={{color:'white'}}>Are you still SAD?</h1>
            <div className="container">
            <NavLink to="/textentry">
            <button type="button" className="btn btn-success btn-lg btn3d"><span className="glyphicon glyphicon-ok" />YES</button>
            </NavLink>
            </div>
            <div className="container">
            <NavLink to="/seeyouagain">
                <button type="button" className="btn btn-danger btn-lg btn3d"><span className="glyphicon glyphicon-remove" /> SAD</button>
            </NavLink>
            </div>
            </div>
        );
    }
}

export default AskAgain;