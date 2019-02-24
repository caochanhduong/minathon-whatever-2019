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
import game5 from './game5';
import game6 from './game6';
import game7 from './game7';
import game8 from './game8';
import Ask1 from './Ask1';
import Ask2 from './Ask2';
import Ask3 from './Ask3';
import FinalScreen from './FinalScreen';
import giphy from './giphy';
import Ask4 from './ask4';
import hahaha from './Hahaha';
import Ask5 from './ask5';
import game3b from './game3b';
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
            <Route exact path="/ask1" component={Ask1}></Route>
            <Route exact path="/ask2" component={Ask2}></Route>
            <Route exact path="/ask3" component={Ask3}></Route>
            <Route exact path="/game2" component={game2}></Route>
            <Route exact path="/game4" component={game4}></Route>
            <Route exact path="/game5" component={game5}></Route>
            <Route exact path="/game6" component={game6}></Route>
            <Route exact path="/game7" component={game7}></Route>
            <Route exact path="/game8" component={game8}></Route>
            <Route exact path="/gift" component={giphy}></Route>
            <Route exact path="/ask4" component={Ask4}></Route>
            <Route exact path="/hahaha" component={hahaha}></Route>
            <Route exact path="/ask5" component={Ask5}></Route>
            <Route exact path="/finalscreen" component={FinalScreen}></Route>
            <Route exact path="/game3b" component={game3b}></Route>
            <Route exact path="/game3" component={game3}></Route>
            <Route exact path="/finalscreen" component={FinalScreen}></Route>
        </Switch>
        );
    }
}

export default RedirectMain;