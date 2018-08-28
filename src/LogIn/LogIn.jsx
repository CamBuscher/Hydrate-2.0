import React, { Component } from 'react';
import './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      key: '76980330-8f0b-4659-a341-527364acf134'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;
    
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.getID(this.state.key)
  }

  render() {
    return(
      <div className='LogIn'>
        <h2>Please enter your account's API key to see your devices</h2>
        <input type="text" value={this.state.key} name='key' onChange={this.handleChange}/>
        <button onClick={(e) => this.handleSubmit(e)}>Log In</button>
        <p><a href='https://rachio.readme.io/docs/authentication' target='_blank'>Can't find your API key?</a></p>
      </div>
    )
  }
}

export default LogIn;