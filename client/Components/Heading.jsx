import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroImage from './HeroImage.jsx'
import Author from './Author.jsx'

class Heading extends Component {
  render() {
  
  	const heading = this.props;

    return (
    	<section className="heading">
    		<div className="container">
          <div className="textContent">
            <span>{heading.category.name}</span>
            <h1>{ heading.title }</h1>
            <Author author={this.props.author} />
            <p>{ heading.sell }</p>
          </div>
    			<HeroImage imageData={heading.heroImage[0]} />
    		</div>
    	</section>
     );
  }
} 

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	sell: PropTypes.string.isRequired,
	heroImage: PropTypes.array.isRequired,
}

export default Heading;