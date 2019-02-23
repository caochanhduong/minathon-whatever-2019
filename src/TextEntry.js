import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './MainScreen.css';

class TextEntry extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:'',
            styles:{
                opacity:1.0,
                marginLeft:'200px'
            },
            count:0,
            count1:0,
            styles1:{
                marginTop:'10px'
            }

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseCount = this.increaseCount.bind(this);

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
        const x = this.state.styles.opacity > 0.1 ? this.state.styles.opacity - 0.1 : 0;
        this.setState({
            styles:{
                opacity: x,
                marginLeft:'200px'
            },
            count1: this.state.count1+1
        
      
          
        });
        if (this.state.count1==8)
        this.setState({
            styles1:{
                marginTop:'100px'
            }
        });
    }

        increaseCount(){
            this.setState({
            count: this.state.count +1
            }
            );
        }

        
        renderButton(){
            if (this.state.styles.opacity>0)
            {
                return   <input type="submit" value="CLEAR ALL!" className="btn btn-danger btn-lg btn3d" style={this.state.styles1}/>
            }
            else
            {
                return (
                    <div>
                <NavLink to="/letplaygame">
                <button type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-road" /> CONTINUE</button>
                </NavLink>
{
    this.state.count<3 ?  <button onClick={this.increaseCount}  type="button" className="btn btn-success btn-lg btn3d"  ><span className="glyphicon glyphicon-road" /> RETRY</button> : <button onClick={this.increaseCount}  type="button" className="btn btn-success btn-lg btn3d"  disabled><span className="glyphicon glyphicon-road" /> RETRY</button> 
    

}
               

                </div>
                )
            }
        }
    render() {
        console.log(this.state.count1);
        return (
            <div className="textentry">
            <div className="container">
                <div className="form-group">
                <form id="paper" onSubmit={this.handleSubmit}>

  <h1 htmlFor="exampleFormControlTextarea1" style={{textAlign:'center',marginTop:"15px"} }className="test" >WHAT MAKES YOU SAD?</h1>
  <textarea className="form-control" name="text" id="text" rows={3} defaultValue={""} value={this.state.text} onChange={this.handleChange} style={this.state.styles}/>
  <div className="container" style={{alignContent:'center',marginLeft:'-20px'}}>
<br></br>
{this.renderButton()}

 


  </div>

  </form>
</div>

            </div>
            </div>
        
        );
    }
}

export default TextEntry;