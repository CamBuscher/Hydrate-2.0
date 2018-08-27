import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return(
      <div className='LogIn'>
        <h2>Please enter your account's API key</h2>
        <p><a href='' target='_blank'>I can't find my API key</a></p>
      </div>
    )
  }
}

export default LogIn;