import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Ask2 extends Component {
    render() {
        return (
<div className="App" style={{height:'650px'}}>
            <div style={{backgroundColor:'blue',opacity:0.7,marginTop:'15%',marginLeft:'20%',marginRight:'20%',height:'300px',borderRadius:20}}>

            <h1 style={{color:'white',paddingBottom:'250px'}}>
DO YOU FEEL BETTER ?</h1>
 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NavLink to="/finalscreen">
            <button type="button" className="btn btn-success btn-lg btn3d" style={{height:'50px',width:'165px',marginLeft:'27px'}}><span className="glyphicon glyphicon-ok" /> YES,THANKS!</button>
            </NavLink>
            <img src="http://clipart-library.com/images/8TEoXxyzc.gif" style={{height:'90px',width:'90px',paddingTop:'25px'}}></img>

      
            <NavLink to="/game4">
            <br></br>
            <button type="button" className="btn btn-danger btn-lg btn3d" style={{height:'50px',width:'165px',marginRight:'6px'}}><span className="glyphicon glyphicon-remove" /> STILL NO!</button>
            <img src="https://media.giphy.com/media/4NevN2LrJD8STPSoiD/giphy.gif" style={{height:'60px',width:'50px',paddingTop:'15px',marginLeft:'17px'}}></img>

            </NavLink>
            </div>
            </div>
        );

    }
}

export default Ask2;