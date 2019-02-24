import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './funny2.css';
class game7 extends Component {
    render() {
        return (
            <div className="game7">
                             {/* <div className="container" style={{opacity:0.7,marginLeft:"10%"}}>
                <h1 style={{paddingTop:'20px',backgroundColor:'pink',color:'blue'}}>LEVEL 4: TRY WITH MORE AND MORE HAPPY BUTTONS</h1>  
                </div>   */}
            <div className="funny4a">
            <NavLink to="/game8">
            <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> DUC</button>
            </NavLink>
            </div>
            <div className="funny4b">
                
                    <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
            
            </div>

            <div className="funny4c">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
        
        </div>
        <div className="funny4d">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
        
        </div>
        <div className="funny4e">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
        
        </div>
        <div className="funny4f">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
        
        </div>
        <div className="funny4g">
                
                <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-up" /> HAPPY</button>
        
        </div>

        <div className="funny4ado">
                <NavLink to="/game6">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-down" /> SAD</button>
                </NavLink>
        </div>
        <div className="funny4bdo">
                <NavLink to="/game6">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-down" /> SAD</button>
                </NavLink>
        </div>
        <div className="funny4cdo">
                <NavLink to="/game6">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-down" /> SAD</button>
                </NavLink>
        </div>
        <div className="funny4ddo">
                <NavLink to="/game6">
                <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-thumbs-down" /> SAD</button>
                </NavLink>
        </div>
            </div>
        );
    }
}



export default game7;