import React from "react";
import {Helmet} from "react-helmet";

class Head extends React.Component {
  render () {
    return (
        <div className="head">
            <Helmet>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
				<meta name="description" content="Is your weather weird?"/>
				<meta name="author" content="Dave Douglas"/>

				<title>Weird Weather?</title>

            </Helmet>
        </div>
    );
  }
};

export default Head;