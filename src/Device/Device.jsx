import React, { Component } from 'react';
import './Device.css'

export default class Device extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zones: this.props.device.zones.reduce((acc, zone) => {
        acc[zone.id] = {
          enabled: zone.enabled,
          runtime: Math.round(zone.runtime / 60),
          started: false
        }
        return acc
      }, {})
    }

    this.updateZoneRuntime = this.updateZoneRuntime.bind(this);
    this.runSingleZone = this.runSingleZone.bind(this);
  }

  updateZoneRuntime(e, zoneID) {
    let { value } = e.target;
    const { zones } = this.state;

    if (value > 180) {
      value = 180
    } else if (value < 0) {
      value = 0
    }

    const newZones = Object.assign({}, zones)
    newZones[zoneID].runtime = parseInt(value);

    this.setState({
      zones: newZones
    })
  }

  runSingleZone(e, zoneID) {
    e.preventDefault();

    const body = JSON.stringify({
      id: zoneID,
      duration: this.state.zones[zoneID].runtime
    })

    try {
      fetch('https://api.rach.io/1/public/zone/start', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.props.apiKey}`
        },
        body
      })
      .then(() => {
        const { zones } = this.state;

        const newZones = Object.assign({}, zones)
        newZones[zoneID].running = true

        this.setState({ zones: newZones})
      })
    } catch(error) {
      console.log(error)
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
                  <input 
                    data-zone-id={zone.id} 
                    type='number' 
                    value={this.state.zones[zone.id].runtime} 
                    onChange={(e) => this.updateZoneRuntime(e, zone.id)}
                  /> <span> minutes </span>
                  {
                    !this.state.zones[zone.id].running ? 
                      <button 
                        className='zone_run'
                        onClick={e => this.runSingleZone(e, zone.id)}  
                      >Run zone</button>
                      :
                      <button className='zone_run__running'>Zone running</button>
                  }
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