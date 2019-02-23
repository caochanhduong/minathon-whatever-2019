import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Intruction extends Component {
    render() {
        return (
            <div className="jumbotron">
            <h1>LET'S MAKE SOMETHING FUNNY !!</h1>     
            <NavLink to="/textentry">
            <button type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-remove" /> CONTINUE</button>
            </NavLink> 
            </div>
        );
    }
}

export default Intruction;