import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { bounce,fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './MainScreen.css';
import './App.css'
var styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeOut, 'fadeout')

    }
  }
class MainScreen extends Component {

    render() {
        return (
            <div className="App">
            <div style={{backgroundColor:'#83C9F4',opacity:0.7,marginTop:'15%',marginLeft:'20%',marginRight:'20%',height:'300px',borderRadius:20,boxShadow:'10px 10px 5px grey'}}>

<h1 style={{paddingBottom:'250px',fontFamily:'URW Chancery L, cursive',color:'white'}}>
ARE YOU OK ?</h1>
 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NavLink to="/letplaygame">
            <button type="button" className="btn btn-success btn-lg btn3d" style={{height:'50px',width:'120px',marginLeft:'27px'}}><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>
            <img src="http://clipart-library.com/images/8TEoXxyzc.gif" style={{height:'90px',width:'90px',paddingTop:'25px'}}></img>

      
            <NavLink to="/instruction">
            <br></br>
            <button type="button" className="btn btn-danger btn-lg btn3d" style={{height:'50px',width:'120px',marginRight:'6px'}}><span className="glyphicon glyphicon-remove" /> NO </button>
            <img src="https://media.giphy.com/media/4NevN2LrJD8STPSoiD/giphy.gif" style={{height:'60px',width:'50px',paddingTop:'15px',marginLeft:'17px'}}></img>

            </NavLink>
            </div>
            </div>
        );
    }
}

export default MainScreen;