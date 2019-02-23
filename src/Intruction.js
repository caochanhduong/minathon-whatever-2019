import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
class Intruction extends Component {
    render() {
        return (

            <div className="App1">
            <h1 style={{marginTop:'100px'}}> <span>LET'S</span> <span>MAKE</span> <span>SOMETHING</span> <span>FUNNY !</span></h1>     
            <NavLink to="/textentry">
            <button type="button" className="btn btn-success btn-lg btn3d" style={{marginTop:'150px'}} ><span className="glyphicon glyphicon-remove" /> CONTINUE</button>
            </NavLink> 
            </div>
        );
    }
}

export default Intruction;