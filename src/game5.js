import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './funny2.css';
class game5 extends Component {
    render() {
        return (
            <div className="game5">
                        <div className="container" style={{opacity:0.7,marginLeft:"10%"}}>
             <h1 style={{paddingTop:'20px',backgroundColor:'pink',color:'blue'}}>LEVEL 2: TRY TO CATCH THE YES BUTTON AGAIN <br></br>BUT ONLY ONE BUTTON SUCCESS</h1>  
             </div> 
            <div className="funny2a">
            <NavLink to="/game6">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>
            </div>
            <div className="funny2b">
                
                    <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            
            </div>

            <div className="funny2c">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
        
        </div>
        <div className="funny2cdo">
                <NavLink to="/game1">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
                </NavLink>
        </div>
            </div>
        );
    }
}

export default game5;