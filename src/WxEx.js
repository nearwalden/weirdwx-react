/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import Head from './WxEx-head.js';
import Home from './Home.js';
import Location from './Location.js';
import Loading from './Loading.js';
import Now from './Now.js';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';
// import './css/sidebar-themes.css';

class WxEx extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  view: 'home',
	  place: "",
      lat:  null,
      lon: null,
      data: null
    };
	this.handleLatLon = this.handleLatLon.bind(this);
	this.handlePlace = this.handlePlace.bind(this);
  }
  
  navClick (button) {
  	this.setState ({
  		view:  button
  		});
	  }

  handlePlace (place) {
	  this.setState ({
		  place: place
	  });

	  const nowID = "101U8uiWx4CPxqo0UfE6";
	  const nowCode = "5zoGKZivRQzuL9a8nrSqdw";
	  const nowQuery = "app_id=" + nowID + "&app_code=" + nowCode + "&searchtext=" + place;
	  const url = "https://geocoder.api.here.com/6.2/geocode.json?" +nowQuery;

	  console.log("Place = " + place);

	  fetch (url) 
    	.then(response => response.json())
  		.then(data => {
			console.log(data);
			// check for error here
			var loc = data['Response']['View'][0]['Result'][0]['Location']['NavigationPosition'][0];
			var lat = loc['Latitude'];
			var lon = loc['Longitude'];
			this.handleLatLon(lat, lon)

  		});

	}
  
  handleLatLon(lat, lon) {
    
    this.setState ({
    	lat: lat,
    	lon: lon
    })
    
    const url = "http://localhost:9000/summary?lat="+lat+"&lon="+lon;

	console.log("URL = " + url);
	
	this.setState({view: "loading"});
    
    fetch (url) 
    	.then(response => response.json())
  		.then(data => {
    		console.log(data);
    		this.setState({data: data.data,
    						view: 'now'});
  		});
  }
  

  render() {
  	let viewElement;
  	var view = this.state.view;
  	
  	switch (view) {
  		case "home":  
  			viewElement = <Home 
							  onSubmitLatLon={this.handleLatLon}
							  onSubmitPlace={this.handlePlace}
  							/>;
  			break;
  		case "location":
  			viewElement = <Location />;
  			break;
  		case "loading":
  			 viewElement = <Loading />;
  			break;
  		case "now":
  			 viewElement = <Now 
							   data={this.state.data}
							   lat={this.state.lat}
							   lon={this.state.lon}
  							/>;
  			break;  		
  		default: 
  			viewElement = <Home />;
  	};
  		
  		
    return (
        <div className="WxEx">
			<Head />
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/* <a className="navbar-brand" href="#">Navbar</a> */}
				<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>	
				<a className="nav-link" href="#">About</a>		
			</nav>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4 text-white text-center">Weather Explorer</h1>
				</div>
			</div>
			{/*
			<div className="wide">
				<div className="col-xs-2 logo">Logo</div>
			</div>
			*/}

			<div className="container">
				<div className="text-center">
					{viewElement}
				</div>
			</div>{/* /.container */}		

		</div>	
		
    );
  }
}

export default WxEx;
