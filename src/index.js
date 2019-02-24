import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Textentry from './TextEntry';
import * as serviceWorker from './serviceWorker';
import AfterEntry from './AfterEntry';
import AskAgain from './AskAgain';
import SeeyouAgain from './SeeYouAgain';
import Intruction from './Intruction';
import Funny2 from './Funny2';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. SADte this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
