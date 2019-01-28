// This is what shows up when the page is first opened

import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleLatLon = this.handleLatLon.bind(this);
		this.handlePlace = this.handlePlace.bind(this);
	}
	handleLatLon(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		// console.log("data = " + data + ", lat = "+data.get('lat'));
  		this.props.onSubmitLatLon(data.get("lat"), data.get("lon"));
	}

	handlePlace(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		// console.log("data = " + data + ", lat = "+data.get('lat'));
  		this.props.onSubmitPlace(data.get("place"));
	}
	
  render() {
    return (
        <div className="Home">	
        	<div className="row">
				<div className="form-group col-md-12">
						<p>Enter your location below.</p>
						<form href="#" onSubmit={this.handlePlace}>
							<label htmlFor="place">Location</label>
							<input id="place" name="place" type="text" />
							<button>Submit location</button>
					  	</form>		   
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="form-group col-md-12">
						<h3>Location</h3>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-md-12">
						<form href="#" onSubmit={this.handleLatLon}>
							<label htmlFor="lat">Latitude</label>
							<input id="lat" name="lat" type="text" />

							<label htmlFor="lon">Longitude</label>
							<input id="lon" name="lon" type="text" />

							<button>Submit lat/lon</button>
					  	</form>		   
				</div>

				<hr/>
			</div>
		</div>
							
    );
  }
}

export default Home;
