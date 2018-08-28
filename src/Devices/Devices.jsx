import React, { Component } from 'react';
import './Devices.css';

class Devices extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.devices.map(device => <img src={device.imageUrl} />)}
      </div>
    )
  }
}