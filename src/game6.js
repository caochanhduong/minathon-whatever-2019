import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './funny2.css';
class game6 extends Component {
    render() {
        return (
            <div className="game6">
                       <div className="container" style={{opacity:0.7,marginLeft:"10%"}}>
             <h1 style={{paddingTop:'20px',backgroundColor:'pink',color:'blue'}}>LEVEL 3: TRY TO CATCH THE YES BUTTON AGAIN <br></br>MORE BUTTON</h1>  
             </div> 
            <div className="funny3a">
            <NavLink to="/game7">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            </NavLink>
            </div>
            <div className="funny3b">
                
                    <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
            
            </div>

            <div className="funny3c">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
        
        </div>
        <div className="funny3d">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
        
        </div>
        <div className="funny3e">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
        
        </div>
        <div className="funny3ado">
                <NavLink to="/game5">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
                </NavLink>
        </div>
        <div className="funny3bdo">
                <NavLink to="/game5">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
                </NavLink>
        </div>
        <div className="funny3cdo">
                <NavLink to="/game5">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> NO</button>
                </NavLink>
        </div>
            </div>
        );
    }
}



export default game6;