// This is what shows up when the page is first opened

import React, { Component } from 'react';

class Now extends Component {

  render() {
    return (
        <div className="Now">	
        	<div class="row">
				<div class="form-group col-md-12">
						<h2>Now @ {this.props.lat}, {this.props.lon}</h2>
						<p>Current temperature:  {this.props.data['current']['temperature']}</p>
						<p>Today's high:  {this.props.data['current']['temperatureHigh']}</p>
						<p>Today's low:  {this.props.data['current']['temperatureLow']}</p>						
						<hr/>
						<h2>Historical View for This Day</h2>
						<p><b>Hottest</b></p>
						<p>Max high temperature:  {this.props.data['maxHigh']}</p>
						<p>Max low temperature:  {this.props.data['maxLow']}</p>												
						<p><b>Average</b>:</p>
						<p>Mean high temperature:  {this.props.data['meanHigh']}</p>
						<p>Mean low temperature:  {this.props.data['meanLow']}</p>												
						<p><b>Coldest</b></p>
						<p>Min high temperature:  {this.props.data['minHigh']}</p>
						<p>Min low temperature:  {this.props.data['minLow']}</p>
						<hr/>
						<p>Results delivered by Darksky in {this.props.data['elapsed_time']}ms using {this.props.data['version']}</p>												
				</div>
				<hr/>
				<div class="row">

				</div>


			</div>
		</div>							
    );
  }
}

export default Now;
