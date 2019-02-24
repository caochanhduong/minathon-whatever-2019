import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './funny2.css';
import './App.css';
class Game1 extends Component {
    render() {
        return (
            <div className="game1" >
                 {/* <div className="container" style={{opacity:0.7,marginLeft:"10%"}}>
                <h1 style={{paddingTop:'20px',backgroundColor:'pink',color:'blue'}}>LEVEL 1: TRY TO CATCH THE HAPPY BUTTON</h1>  
                </div>   */}
            <div className="funny">
            <NavLink to="/game5">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
            </NavLink>


            </div>
                </div>
        );
    }
}

export default Game1;