import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      key: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='LogIn'>
        <h2>Please enter your account's API key to see your devices</h2>
        <input type="text" value={this.state.key} name='key' onChange={this.handleChange}/>
        <button>Log In</button>
        <p><a href='' target='_blank'>Can't find your API key?</a></p>
      </div>
    )
  }
}

export default LogIn;