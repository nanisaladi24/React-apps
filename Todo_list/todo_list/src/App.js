import React from 'react';
import logo from './logo.svg';
import './App.css';
import TxtFld from './Todo_components/txtField'

//console.log(a);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          To Do App
        </h1>
        <TxtFld/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
