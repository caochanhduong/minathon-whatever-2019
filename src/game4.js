import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './MainScreen.css';
import {NavLink} from 'react-router-dom';
import './App.css';
class game4 extends Component {
    render() {
        return (
            <div className="game4">
            <div className="typewriter">
                <h1 style={{position:'relative'}}>TRY TO LISTEN TO MUSIC !</h1>
            </div>
<Iframe url="https://mp3.zing.vn/tim-kiem/bai-hat.html?q=happy+music"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        position="relative"
        allowFullScreen/>

        <div className="container" style={{paddingLeft:'0%'}}>
       
            <NavLink to="/ask3">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
            </NavLink>

            </div>
            <br></br>
            </div>
        );
    }
}

export default game4;