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
      lat:  null,
      lon: null,
      loc:  "",
      data: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  navClick (button) {
  	this.setState ({
  		view:  button
  		});
  	}
  
  handleSubmit(lat, lon) {
    
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
  							onSubmit={this.handleSubmit}
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
  							/>;
  			break;  		
  		default: 
  			viewElement = <Home />;
  	};
  		
  		
    return (
        <div className="WxEx">
			<Head />
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Navbar</a>
				<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>			
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Features</a>
					</li>
					</ul>
				</div>
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
