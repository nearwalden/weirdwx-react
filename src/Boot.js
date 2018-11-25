import React, { Component } from 'react';
import Head from './head.js';
import './vendor/bootstrap/css/bootstrap.min.css';
import './Boot.css';
// import Navbar from '../node_modules/react-bootstrap/lib/Navbar';
// import Jumbotron from '../node_modules/react-bootstrap/lib/Jumbotron';
// import Button from '../node_modules/react-bootstrap/lib/Button';
// import Form from '../node_modules/react-bootstrap/lib/Form';

class Boot extends Component {
  render() {
    return (
        <div className="Boot">
		<Head />
		<a name="top" ></a>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		  <a class="navbar-brand" href="#">Weird Weather</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto">
			  <li class="nav-item active">
				<a class="nav-link" href="#top">Top <span class="sr-only">(current)</span></a>
			  </li>
			  <li class="nav-item active">
				<a class="nav-link" href="#about">About</a>
			  </li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
			  <input class="form-control mr-sm-2" type="text" placeholder="Enter Location" aria-label="Locaiton"/>
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		  </div>
		</nav>



		<main role="main">

		  {/* Main jumbotron for a primary marketing message or call to action */}
		  <div class="jumbotron">
			<div class="container">
			  <h1 class="display-3">Understand Your Weather</h1>
			  <p>Sometimes it feels like usual weather, but it's hard to know what's happened in the past.  Enter a location above and find out more.</p>
			  <p><a class="btn btn-primary btn-lg" href="#about" role="button">Learn more &raquo;</a></p>
			</div>
		  </div>

		  <div class="container">
			{/* Example row of columns */}
			<div class="row">
			  <div class="col-md-4">
				<h2>Daily Compare</h2>
				<p>(select a location)</p>
				<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
			  </div>
			  <div class="col-md-4">
				<h2>Weekly Compare</h2>
				<p>(select a location)</p>
				<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
			  </div>
			  <div class="col-md-4">
				<h2>Heading</h2>
				<p>(select a location)</p>
				<p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
			  </div>
			</div>
			



		  </div> 
		  		  
		  <div class="jumbotron">
		    <a name="about"></a>
			<div class="container">
			  <h1 class="display-3">About</h1>
			  <p>SNotes here on how this was computed.</p>
			</div>
			<hr />
		  </div>


		</main>

		<footer class="container">
		  <p>&copy; Dave Douglas 2018</p>
		</footer>
		
		</div>


    );
  }
}

export default Boot;

