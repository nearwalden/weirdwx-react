import React, { Component } from 'react';
import Head from './WxEx-head.js';
import Main from './Main.js';
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
      loc:  ""
    };
  }
  
  clickHandler (button) {
  	this.setState ({
  		view:  button
  		});
  	}

  render() {
    return (
        <div className="WxEx">
		<Head />
		
			<div class="page-wrapper chiller-theme sidebar-bg bg1 toggled">
				<a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
					<i class="fas fa-bars"></i>
				</a>
				<nav id="sidebar" class="sidebar-wrapper">
					<div class="sidebar-content">
						<div class="sidebar-brand">
							<a href="#">Weather Explorer</a>
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
									<a href="#">
										<i class="fa fa-calendar"></i>
										<span>Location</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-calendar"></i>
										<span>Current</span>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fa fa-calendar"></i>
										<span>Historical</span>
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
						<Main />
					</div>
				</main>
				{/* page-content" */}
			</div>	
		</div>	
		
    );
  }
}

export default WxEx;
