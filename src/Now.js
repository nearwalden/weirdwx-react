// This is what shows up when the page is first opened

import React, { Component } from 'react';

class Now extends Component {

  render() {
    return (
        <div className="Now">	
        	<div class="row">
				<div class="form-group col-md-12">
						<h2>Now</h2>
						<p>Current temperature:  {this.props.data['current']['temperature']}</p>
						<p>Precipitation today:  </p>
						<hr/>
						<h3>Historical View</h3>
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
