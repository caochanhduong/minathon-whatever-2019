import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import final from './final.jpg';
class FinalScreen extends Component {
    render() {
        return (
            <div className="App" style={{marginTop:'0px',height:'750px'}}>
            <div style={{boxShadow: '10px 10px grey',backgroundImage:`url(${final})`,marginLeft:'20%',marginRight:'20%',padding:'20px'}}>
                <h3 style={{color:'#090744'}}><b><i>"We are very glad to help you become more happy, or if you are happy, congratulations! As you have seen, there are many things in life that make you feel sad and worried (like what you typed before, like the SAD buttons you encounter in our game). 
                    <br></br><br></br>Life is fighting, but also to enjoy, find joy from the smallest things (like the way you find the true <b>HAPPY</b> buttons in the game) to be able to write the rest of your life.
                <br></br>
And the most important thing! Always SMILE!<br></br>
Thanks for visiting our application.<br></br>
Good bye! <br></br>

Click Continue to return to the opening page."</i></b></h3>
</div>
                        <NavLink to="/">
                            <button type="button" className="btn btn-danger btn-lg btn3d" ><span className="glyphicon glyphicon-ok" />CONTINUE</button>
                        </NavLink>
            </div>
        );
    }
}

export default FinalScreen;