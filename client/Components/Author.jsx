import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Request from 'axios';

// import Loading from './Loading.jsx';

class Author extends Component {

	constructor(props) {
		super(props);

		// Set up an empty author object in the state. Stops component from not rendering.
		this.state = {
		  author: {},
		  authorLoaded: false,
		  authorFailed: false
		};
	}


	componentWillMount() {
		// Get the URL for the author data to use as the  request endpoint
		const author = 'http://shortliststudio.foundry.press/wp-json/wp/v2/users/2';

	  // Get the content from the API.
	  Request.get(author)
	  	// Using promise to handle error, and arrow syntax to bind response to component
	    .then((response) => {
	    		// Add the returned response to the author state
	    		this.setState({
	    		  author: response.data,
	    		  authorLoaded: true,
	    		});

	    }).catch((response) => {

	    	// if there is an issue loading the author, set authorFailed to true. 
	    	// allows a notification to display on the front end. 
		    if(response instanceof Error) {
		      this.setState({
		        authorFailed: true
		      });
		    }

  		});
	}

	render() {
		// 
		const { author } = this.state;
		const authorName = this.state.authorFailed ? 'Unable to load author' : author.name;

		return (
		    <div className="author">
		    		<div className="author__details">
		    				{ authorName } <span>{ author.description }</span>
		    		</div>
		    </div>
		 );
	}
} 


Author.propTypes = {
		author: PropTypes.array.isRequired
};

export default Author;