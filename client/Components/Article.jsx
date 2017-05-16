
import React, {Component, PropTypes} from 'react';
import Request from 'axios';

import Loading from './Loading.jsx';
import Widgets from './Widgets.jsx';
import Heading from './Heading.jsx';



class Article extends Component {

	constructor() {
		super();

		this.state = {
			isLoading: true,
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

