import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import LogIn from './LogIn/LogIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
      </div>
    );
  }
}

export default App;