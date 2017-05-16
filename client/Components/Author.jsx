import React, {Component, PropTypes} from 'react';
import Request from 'axios';

import Loading from './Loading.jsx';

class Author extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// Get the URL for the author data to use as the  request endpoint
		const author = this.props.author[0].href;


	  // Get the content from the API.
	  Request.get(author)
	    .then((response) => {
	      this.setState({
	        author: response.data
	      });
	    });
	}


	render() {
		return (
		    <div className="author">
		    </div>
		 );
	}
} 

export default Author;