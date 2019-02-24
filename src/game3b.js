import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import trollface from './trollface.jpg';
import noface from './noface.jpg';
import wrong from './wrong.png';
class game3b extends Component {

  constructor(props) {
      super(props);
      this.state={
        boolArr: [true,false,true,false,true],
      };

  }
  onUpdateItem = (i,bool) => {
    let newarr = this.state.boolArr;
    newarr[i] = !this.state.boolArr[i];
    this.setState({
      boolArr: newarr
    });
 }


    render() {
        return (

<div className="game3b">
<div className="container" style={{opacity:0.7,marginLeft:"10%"}}>
                <h1 style={{backgroundColor:'pink',color:'blue',marginBottom:'320px'}}>LEVEL 0.5: TOGGLE 5 BUTTON YES TO ACTIVATE THE RIGHT ONE</h1>  
                </div>  
  <div className="row" style={{paddingTop:'10%'}}>
    {/* <div className="col-sm-6" style={{paddingLeft:"0%",marginRight:'30%'}} >
    
    </div > */}
    <div className="col-sm-4" style={{marginLeft:'33%'}} >
    {this.state.boolArr[0] ? <button type="button" onClick={(e) => {this.onUpdateItem(0); this.onUpdateItem(1);}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> : <button type="button" onClick={(e) => {this.onUpdateItem(0); this.onUpdateItem(1);}} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>}
    {this.state.boolArr[1] ? <button type="button" onClick={(e) => {this.onUpdateItem(0); this.onUpdateItem(1);this.onUpdateItem(2);}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> : <button type="button" onClick={(e) => {this.onUpdateItem(0); this.onUpdateItem(1);this.onUpdateItem(2);}} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> }
    {this.state.boolArr[2] ? <button type="button" onClick={(e) => {this.onUpdateItem(1); this.onUpdateItem(2);this.onUpdateItem(3);}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> : <button type="button" onClick={(e) => {this.onUpdateItem(1); this.onUpdateItem(2);this.onUpdateItem(3);}} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> }
    {this.state.boolArr[3] ? <button type="button" onClick={(e) => {this.onUpdateItem(2); this.onUpdateItem(3);this.onUpdateItem(4);}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> : <button type="button" onClick={(e) => {this.onUpdateItem(2); this.onUpdateItem(3);this.onUpdateItem(4);}} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> }
    {this.state.boolArr[4] ? <button type="button" onClick={(e) => {this.onUpdateItem(3); this.onUpdateItem(4);}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> : <button type="button" onClick={(e) => {this.onUpdateItem(3); this.onUpdateItem(4);}} className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button> }

</div>

    
  </div>
  <div>
    <br></br>
    <br></br>
    <NavLink to="/game3"  >
            <button type="button" style={{marginLeft:'0%'}} className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-remove" /> NO</button>
    </NavLink>
    {!this.state.boolArr[4] && !this.state.boolArr[0] && !this.state.boolArr[1] && !this.state.boolArr[2] && !this.state.boolArr[3] ?
    <NavLink to="/game1">
      <button type="button" className="btn btn-success btn-lg btn3d" ><span className="glyphicon glyphicon-ok" /> YES</button>
    </NavLink>
    : <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok"  /> YES</button>
    }

</div>
</div>
        );
    }
}

export default game3b;
