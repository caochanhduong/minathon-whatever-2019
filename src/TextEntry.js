import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './MainScreen.css';
import $ from 'jquery';
class TextEntry extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit = async (e) => {
        
        e.preventDefault();
    
        this.setState({
            text: ''
          });
          
        } 
    render() {
        return (
            <div className="container">
                <div className="form-group">
                <form id="paper" onSubmit={this.handleSubmit}>

  <h1 htmlFor="exampleFormControlTextarea1" style={{textAlign:'center'} }className="test" >WHAT MAKES YOU SAD?</h1>
  <textarea className="form-control" name="text" id="text" rows={3} defaultValue={""} value={this.state.text} onChange={this.handleChange} style={{marginLeft:'200px'}}/>
  <div className="container" style={{alignContent:'center',paddingLeft:'250px'}}>

  <input type="submit" value="CLEAR ALL!" className="btn btn-danger btn-lg btn3d"/>

  <NavLink to="/funny2">
  <button type="button" className="btn btn-warning btn-lg btn3d" ><span className="glyphicon glyphicon-user" /> FUNNY</button>
  <NavLink to="/askagain">
  <button type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
  </NavLink>
  </NavLink>
  </div>

  </form>
</div>

            </div>
        
        );
    }
}

export default TextEntry;