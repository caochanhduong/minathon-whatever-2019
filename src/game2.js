import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './MainScreen.css';
import {NavLink} from 'react-router-dom';
class game2 extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:'white'}}>YOU MAY WANT TO READ SOME JOKES !</h1>
<Iframe url="http://www.truyencuoihay.vn/"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        position="relative"
        allowFullScreen/>
         <h1 style={{color:'white'}}>ARE YOU FEEL MORE OK ?</h1>
        <div className="container" style={{paddingLeft:'35%'}}>
       
            <NavLink to="/">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>
            <NavLink to="/game3">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
            </NavLink>
            </div>
            </div>
        );
    }
}

export default game2;
