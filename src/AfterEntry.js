import React, { Component } from 'react';
import './MainScreen.css';
class AfterEntry extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group">
  <label htmlFor="exampleFormControlTextarea1" >The result of your entry</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  <div className="container" style={{alignContent:'center',paddingLeft:'350px'}}>

  <button type="button" className="btn btn-danger btn-lg btn3d"  ><span className="glyphicon glyphicon-remove" /> CONTINUE</button>
  </div>
</div>

            </div>
        );
    }
}

export default AfterEntry;