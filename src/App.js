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
      user: null,
      apiKey: null,
      loadingError: null
    }

    this.getID = this.getID.bind(this);
  }

  getID(apiKey) {
    this.setState({ loading: true, apiKey })
    try {
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
              if (user.errors) {
                this.setState({
                  loadingError: 'User not found, please check your key',
                  loading: false
                })
              } else {
                this.setState({ loading: false, user})
              }
            })
        })
       } catch(error) {
         console.log(error)
    }
  }

  render() {
    const rendered = () => {
      const {loading, user, loadingError} = this.state;

      if (loading) {
        return <img src='/Eclipse.gif' className='loading_gif'/>
      } else if (user) {
        return <Devices userID={user.id} devices={user.devices} apiKey={this.state.apiKey} />
      } else {
        return <LogIn getID={this.getID} loadingError={loadingError}/>
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