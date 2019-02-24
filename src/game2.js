import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './MainScreen.css';
import {NavLink} from 'react-router-dom';
import './App.css';
class game2 extends Component {
    render() {
        return (
            <div className="game2">
            <div className="typewriter">
                <h1 style={{position:'relative',marginTop:'10px',fontFamily:'URW Chancery L, cursive'}}>YOU MAY WANT TO READ SOME JOKES !</h1>
            </div>
<Iframe url="https://www.funny-jokes.com/funny/short_english_jokes.htm"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        position="relative"
        style={{marginLeft:'10%'}}
        allowFullScreen/>
        <div className="container" style={{marginLeft:'0%'}}>
       
            <NavLink to="/ask2">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
            </NavLink>
            </div>
            <br></br>
            </div>
        );
    }
}

export default game2;

