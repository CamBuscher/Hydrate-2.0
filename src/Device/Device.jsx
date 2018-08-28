import React, { Component } from 'react';
import './Device.css'

export default class Device extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const {device} = this.props;

    return(
      <div className='device'>
        <div className='device_name'>{device.name}</div>
      </div>
    )
  }
}