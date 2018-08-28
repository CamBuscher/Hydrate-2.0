import React, { Component } from "react";
import "./App.css";

import Devices from './Devices/Devices';
import LogIn from './LogIn/LogIn';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      userID: null,
      user: null
    }

    this.getID = this.getID.bind(this);
  }

  getID(apiKey) {
    this.setState({ loading: true })
    fetch('https://api.rach.io/1/public/person/info', {
      headers: {Authorization: `Bearer ${apiKey}`}
    })
      .then(response => response.json())
      .then(userID => {
        this.setState({ userID })
        fetch(`https://api.rach.io/1/public/person/${userID.id}`, {
          headers: { Authorization: `Bearer ${apiKey}` }
        })
          .then(response => response.json())
          .then(user => {
            this.setState({ loading: false, user})
          })
      })
  }

  render() {
    const rendered = () => {
      const {loading, user} = this.state;

      if (loading) {
        return <img src='/Eclipse.gif' className='loading_gif'/>
      } else if (user) {
        return <Devices userID={user.id} devices={user.devices} />
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