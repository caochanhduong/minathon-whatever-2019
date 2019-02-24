import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import trollface from './trollface.jpg';
import noface from './noface.jpg';
import wrong from './wrong.png';
class game3 extends Component {

  constructor(props) {
      super(props);
      this.state={
        boolArr: [true,true,true,true,true,true,true,true],
      };

  }
  onUpdateItem = (i) => {
    console.log("abc");
    let newarr = this.state.boolArr;
    newarr[i] = false;
    this.setState({
      boolArr: newarr
    });
    console.log(this.state.boolArr);
 }


    render() {
        return (

<div className="game3" style={{height:'600px'}}>

{/* <h1 style={{color:'white',textAlign:'center'}}>ARE YOU SURE ???</h1> */}
                 <div className="container" style={{opacity:0.7,marginLeft:"10%",marginBottom:'150px'}}>
                <h1 style={{paddingTop:'20px',backgroundColor:'pink',color:'blue'}}>LEVEL 0: FIND THE TRUTH</h1>  
                </div>  
  <div className="row" style={{paddingTop:'10%',paddingLeft:'30%'}}>
    <div className="col-sm-6" >
    {this.state.boolArr[0] ? <button type="button" onClick={(e) => this.onUpdateItem(0)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    {this.state.boolArr[1] ? <button type="button" onClick={(e) => this.onUpdateItem(1)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={trollface}/> }
    {this.state.boolArr[2] ? <button type="button" onClick={(e) => this.onUpdateItem(2)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    {this.state.boolArr[3] ? <button type="button" onClick={(e) => this.onUpdateItem(3)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    {this.state.boolArr[4] ? <button type="button" onClick={(e) => this.onUpdateItem(4)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    <NavLink to="/game3b">
    <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button>
    </NavLink>
    {this.state.boolArr[5] ? <button type="button" onClick={(e) => this.onUpdateItem(5)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    {this.state.boolArr[6] ? <button type="button" onClick={(e) => this.onUpdateItem(6)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={wrong}/> }
    {this.state.boolArr[7] ? <button type="button" onClick={(e) => this.onUpdateItem(7)} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> TRUE</button> : <img height='100' width='100' src={noface}/> }

    </div>
  </div>
</div>
        );
    }
}

export default game3;
