import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Game2 extends Component {
    render() {
        return (
            
            <div className="letplaygame" style={{height:'530px'}}>
            <div className="typewriter">
            <h1 style={{marginTop:'20px',fontFamily:'URW Chancery L, cursive'}}>OK! WE WILL HAVE A GAME FOR YOU.</h1>    
            </div> 
            <NavLink to="/game3">
            <button type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
            </NavLink> 
            </div>
        );
    }
}

export default Game2;