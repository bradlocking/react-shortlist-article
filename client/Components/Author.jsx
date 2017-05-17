import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Request from 'axios';
import { css } from 'glamor';

// Styling of the author name and job description
let authorStyle = css({
	fontSize: 14,
	marginBottom: 11,
	display: 'inline-block',
	background: '#5b5b96',
	padding: '8px 14px',
})

let jobDescription = css({
	color: '#000000',
	fontWeight: '400',
	paddingLeft: '7px'
})


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

		    // FUTURE FEATURE: hook up to sentry and log error if API fails.
  		});
	}

	render() {
		const { author } = this.state;

		return (
		    <div className="author">
		    		<div className="author__details" {...authorStyle}>
		    				{
		    				// If the Author cannot be fetched, just display 'Shortlist media'
		    				// Doing so will not alert the user that something isn't working,
		    				// TODO: hook app to Sentry so that error log can be stored, notifying us 
		    				// Whenever a user cannot access the Author API. 
		    				this.state.authorFailed ? ('Shortlist Media') : (
		    					<div>
		    						{ author.name } <span {...jobDescription}>{ author.description }</span>
		    					</div>
		    				)
		    				}
		    		</div>
		    </div>
		 );
	}
} 


Author.propTypes = {
	author: PropTypes.array.isRequired
};

export default Author;