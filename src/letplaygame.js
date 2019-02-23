import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Game2 extends Component {
    render() {
        return (
            
            <div className="letplaygame">
            <h1 style={{marginTop:'20px'}}>STILL SAD ? WE WILL HAVE A GAME FOR YOU</h1>     
            <NavLink to="/game1">
            <button type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-remove" /> CONTINUE</button>
            </NavLink> 
            </div>
        );
    }
}

export default Game2;