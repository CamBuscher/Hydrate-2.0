import React, { Component } from 'react';
import './Devices.css';

class Devices extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h2 className='devices_header'>Your devices</h2>
        {this.props.devices.map(device => <p>{device.model}</p>)}
      </div>
    )
  }
}

export default Devices;