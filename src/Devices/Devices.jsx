import React, { Component } from 'react';
import './Devices.css';

import Device from '../Device/Device';

class Devices extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2 className='devices_header'>Your devices:</h2>
        <div className='devices_container'>
          {this.props.devices.map(device => <Device device={device} />)}
        </div>
      </div>
    )
  }
}

export default Devices;