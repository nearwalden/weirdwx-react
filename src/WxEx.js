import React, { Component } from 'react';
import Head from './WxEx-head.js';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';
import './css/sidebar-themes.css';

class WxEx extends Component {
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
						<div class="row">
							<div class="form-group col-md-12">
								<h2>Sidebar template</h2>
								<p>This is a responsive sidebar template with dropdown menu based on bootstrap 4 framework.</p>

							</div>
						</div>
						<hr/>
						<div class="row">
							<div class="form-group col-md-12">
								<h3>Themes</h3>
								<p>Here are more themes that you can use</p>
							</div>
						</div>

						<div class="row">
							<div class="form-group col-md-12">
								<a href="#" data-theme="chiller-theme" class="theme chiller-theme selected"></a>
								<a href="#" data-theme="ice-theme" class="theme ice-theme"></a>
								<a href="#" data-theme="cool-theme" class="theme cool-theme"></a>
								<a href="#" data-theme="light-theme" class="theme light-theme"></a>                       
							</div>
							<div class="form-group col-md-12">
								<p>You can also use background image </p>
							</div>
							<div class="form-group col-md-12">
								<a href="#" data-bg="bg1" class="theme theme-bg selected"></a>
								<a href="#" data-bg="bg2" class="theme theme-bg"></a>
								<a href="#" data-bg="bg3" class="theme theme-bg"></a>
								<a href="#" data-bg="bg4" class="theme theme-bg"></a>
							</div>
							<div class="form-group col-md-12">
							   <div class="form-check">
								 <label class="form-check-label">
								   <input type="checkbox" class="form-check-input" name="" id="toggle-bg" checked/>
									Background image
								 </label>
							   </div>
							</div>
				   
						</div>

						<hr/>
						<div class="row">
							<div class="form-group col-md-12">
								<a href="https://github.com/azouaoui-med/pro-sidebar-template" class="btn btn-dark" target="_blank">
									<i class="fab fa-github"></i> View source</a>
								<a href="https://github.com/azouaoui-med/pro-sidebar-template/archive/gh-pages.zip" class="btn btn-outline-dark" target="_blank">
									<i class="fa fa-download"></i> Download</a>
							</div>
						</div>
					</div>
				</main>
				{/* page-content" */}
			</div>	
		</div>	
		
    );
  }
}

export default Nav;
