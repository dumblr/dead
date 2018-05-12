import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//     	let data = JSON.parse(xhttp.responseText);
       
//        ReactDOM.render(<App myData={data} />, document.getElementById('root'));
//     }
// };

// xhttp.open("GET", `${process.env.PUBLIC_URL}/files/mine/head.json`, true);
// xhttp.send();

ReactDOM.render(<App myData={``} />, document.getElementById('root'));

registerServiceWorker();
