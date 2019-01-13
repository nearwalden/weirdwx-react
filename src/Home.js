// This is what shows up when the page is first opened

import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		//console.log("data = " + data + ", lat = "+data.get('lat'));
  		this.props.onSubmit(data.get("lat"), data.get("lon"));
	}
	
  render() {
    return (
        <div className="Home">	
        	<div className="row">
				<div className="form-group col-md-12">
						<p>Enter your location below.</p>

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
						<form href="#" onSubmit={this.handleSubmit}>
							<label htmlFor="lat">Latitude</label>
							<input id="lat" name="lat" type="text" />

							<label htmlFor="lon">Longitude</label>
							<input id="lon" name="lon" type="text" />

							<button>Submit</button>
					  	</form>		   
				</div>

				<hr/>
			</div>
		</div>
							
    );
  }
}

export default Home;
