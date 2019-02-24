import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './MainScreen.css';
import {NavLink} from 'react-router-dom';
import './App.css';
class hahaha extends Component {
    render() {
        return (
            <div className="game4">
            <div className="typewriter">
                <h1 style={{position:'relative'}}>THERE ARE SOME FUNNY VIDEOS !</h1>
            </div>
<Iframe url="https://www.hahaha.com/en/funny-videos?todays-video"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        position="relative"
        allowFullScreen/>

        <div className="container" style={{paddingLeft:'0%'}}>
       
            <NavLink to="/ask5">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
            </NavLink>

            </div>
            <br></br>
            </div>
        );
    }
}

export default hahaha;