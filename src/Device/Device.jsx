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

    const renderZones = () => {
      return device.zones.map(zone => {
        return (
          <div className='device_zone'>
            <img src={zone.imageUrl} alt={`Image of ${zone.name}`} className='zone_image'/>
            {
              zone.enabled ? 
                <div className='zone_controls'>
                  <h4 className='zone_name'>{zone.name}</h4>
                  <span>Runtime: </span>
                  <input data-id={zone.id} type='number' value={0} /> <span> minutes </span>
                  <button className='zone_run'>Run zone</button> 
                </div>
                : 
                <div className='zone_controls'>
                  <h4 className='zone_name'>{zone.name}</h4>
                  <button className='zone_disabled'>Zone is disabled</button>
                </div>
            }
          </div>
        )
      })
    }

    return(
      <div className='device'>
        <div className='device_name'>{device.name}</div>
        {renderZones()}
      </div>
    )
  }
}