import React, { Component } from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import Funny1 from './Funny1';
import TextEntry from './TextEntry';
import MainScreen from './MainScreen';
import AfterEntry from './AfterEntry';
import AskAgain from './AskAgain';
import SeeYouAgain from './SeeYouAgain';
import Funny2 from './Funny2';
import Intruction from './Intruction';
import letplaygame from './letplaygame.js';
import game1 from './Game1.js';
import game2 from './game2';
import game3 from './game3';
import game4 from './game4';
class RedirectMain extends Component {
    render() {
        return (
            <Switch>
            <Route exact path="/funny1" component={Funny1}></Route>
            <Route exact path="/textentry" component={TextEntry} ></Route>
            <Route exact path="/" component={MainScreen}></Route>
            <Route exact path="/afterentry" component={AfterEntry}></Route>
            <Route exact path="/askagain" component={AskAgain}></Route>
            <Route exact path="/seeyouagain" component={SeeYouAgain}></Route>
            <Route exact path="/funny2" component={Funny2}></Route>
            <Route exact path="/instruction" component={Intruction}></Route>
            <Route exact path="/letplaygame" component={letplaygame}></Route>
            <Route exact path="/game1" component={game1}></Route>
            <Route exact path="/game2" component={game2}></Route>
            <Route exact path="/game3" component={game3}></Route>
            <Route exact path="/game4" component={game4}></Route>
        </Switch>
        );
    }
}

export default RedirectMain;