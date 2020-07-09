import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import Hello from './Hello.js'
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robot } from './robot';

ReactDOM.render( 
 /*   <div>
    <Card id={robot[0].id} name={robot[0].name} email={robot[0].email}/>
    <Card id={robot[1].id} name={robot[1].name} email={robot[1].email}/>
    <Card id={robot[2].id} name={robot[2].name} email={robot[2].email}/>
    <Card id={robot[3].id} name={robot[3].name} email={robot[3].email}/> 
    </div>*/
    <Hello/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
