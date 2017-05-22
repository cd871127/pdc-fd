import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit2 <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
      </div>

    );
  }
}

class Hello extends Component
{
  render(){
    return (
        <div>
          <h2>11111111111111111111111111</h2>
        </div>
    )
  }
}

export default App;
