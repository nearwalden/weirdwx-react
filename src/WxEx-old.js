import React, { Component } from 'react';
import Head from './WxEx-head.js';
import Home from './Home.js';
import Location from './Location.js';
import Loading from './Loading.js';
import Now from './Now.js';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';
import './css/sidebar-themes.css';

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
		
			<div class="page-wrapper sidebar-bg bg1 toggled">
				<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
					<i class="fas fa-bars"></i>
				</a>
				<nav id="sidebar" class="sidebar-wrapper">
					<div class="sidebar-content">
						<div class="sidebar-brand">
							<a href="#" onClick={() => this.navClick('home')}>
								Weather Explorer
							</a>
							<div id="close-sidebar">
								<i class="fas fa-times"></i>
							</div>
						</div>
						{/* sidebar-search  */}
						<div class="sidebar-menu">
							<ul>
								<li class="header-menu">
									<span>Info</span>
								</li>
								<li>
									<a href="#" onClick={() => this.navClick('now')}>
										<i class="fa fa-calendar"></i>
										<span>Now</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-calendar"></i>
										<span>Last Week</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-calendar"></i>
										<span>Next Week</span>
									</a>
								</li>
							</ul>
						</div>
						{/*} sidebar-menu  */}
					</div>
					{/*} sidebar-content  */}

				</nav>
				{/* sidebar-wrapper  */}
				<main class="page-content">
					<div class="container-fluid">
					{viewElement}
					</div>
				</main>
				{/* page-content" */}
			</div>	
		</div>	
		
    );
  }
}

export default WxEx;
