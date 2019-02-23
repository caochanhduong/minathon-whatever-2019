import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './funny2.css';

class Game1 extends Component {
    render() {
        return (
            <div>
            <div className="funny">
            <NavLink to="/game2">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>


            </div>
                        <div className="container" style={{marginTop:'300px'}}>
                        <NavLink to="/">
                        <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
                        </NavLink>
            
            
                        </div>
                </div>
        );
    }
}

export default Game1;