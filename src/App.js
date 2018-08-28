import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import LogIn from './LogIn/LogIn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      userID: null,
      userInfo: null
    }
  }

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