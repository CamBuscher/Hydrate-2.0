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
        <div className='devices_container'>
          {this.props.devices.map(device => <Device device={device} />)}
        </div>
      </div>
    )
  }
}

export default Devices;