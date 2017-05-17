import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Request from 'axios';

import Loading from './Loading.jsx';
import Widgets from './Widgets.jsx';
import Heading from './Heading.jsx';

class Article extends Component {

	constructor() {
		super();

		this.state = {
			isLoading: true,
			articleFailed: false
		}
	}

	componentWillMount() {
  		// Endpoint for shortlist studio article
	  const endpoint =  '/api/v1/posts/171/';

	  // Get the content from the API.
	  Request.get(endpoint)
	    .then((response) => {
	      this.setState({
	      	isLoading: false,
	        article: response.data
	      });
	    }).catch((response) => {

	    	// if there is an issue loading the author, set authorFailed to true. 
	    	// allows a notification to display on the front end. 
		    if(response instanceof Error) {
		      this.setState({
		        articleFailed: true
		      });
		    }

		    // FUTURE FEATURE: hook up to sentry and log error if API fails.
  		});
	}


	render() {
		const article = this.state.article;

	  return (
	    <div>
	    	{
	    		this.state.isLoading ? (<Loading />) : (

	    			<div>
		    			<Heading 
		    					title={article.title.rendered}
		    					heroImage={article.acf.hero_images}
		    					sell={article.acf.sell}
		    					category={article.acf.category}
		    					author={article._links.author}
		    					date={article.date}
		    			/>
		    			<Widgets 
		    				widgets={article.acf.widgets}
		    			/>
	    			</div>

	    		)
	    	}		
	    </div>
	  );
	}

}
export default Article;

