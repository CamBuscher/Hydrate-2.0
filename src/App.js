import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import LogIn from './LogIn/LogIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src='/Logo.png' className='logo'/>
        <LogIn />
      </div>
    );
  }
}

export default App;