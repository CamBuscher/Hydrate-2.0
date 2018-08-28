import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import LogIn from './LogIn/LogIn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      userID: null
    }

    this.getID = this.getID.bind(this);
  }

  getID(apiKey) {
    this.setState({ loading: true })
    fetch('https://api.rach.io/1/public/person/info', {
      headers: {Authorization: 'Bearer 76980330-8f0b-4659-a341-527364acf134'}
    })
      .then(response => response.json())
      // .then(userID => this.setState({ loading: false, userID }))
  }

  render() {
    const rendered = () => {
      const {loading, userID} = this.state;

      if (loading) {
        return <img src='/Eclipse.gif' className='loading_gif'/>
      } else if (userID) {
        console.log(userID)
        return <LogIn getID={this.getID} />
      } else {
        return <LogIn getID={this.getID} />
      }
    }

    return (
      <div className="App">
        <img src='/Logo.png' className='logo'/>
        {rendered()}
      </div>
    );
  }
}

export default App;