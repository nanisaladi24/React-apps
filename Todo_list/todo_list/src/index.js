import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import TxtFld from './Todo_components/txtField'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//play area


// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello</h1>;
//     }
//   }

// ReactDOM.render(
//   <TxtFld/>,
//   document.getElementById('root')
// );

// const temp  = "dummy"
// const temp2 = <h1> t1 {temp}</h1>
// ReactDOM.render(
//     temp2,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
