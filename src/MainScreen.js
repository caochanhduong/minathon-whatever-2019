import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { bounce,fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './MainScreen.css';
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
            <StyleRoot>
      <div  style={styles.bounce}>
      <h1 className="test" style={{color:'white'}}>ARE YOU OK??</h1>
      </div>
    </StyleRoot>
            <div className="container">
            <NavLink to="/funny1">
            <button type="button" className="btn btn-success btn-lg btn3d"><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png" style={{height:'100px',width:'100px'}}></img>
            </div>
            <div className="container">
            <NavLink to="/textentry">
            <button type="button" className="btn btn-danger btn-lg btn3d"><span className="glyphicon glyphicon-remove" /> NO</button>
            <img src="http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1480481019" style={{height:'90px',width:'90px'}}></img>

            </NavLink>
            </div>
            </div>
        );
    }
}

export default MainScreen;