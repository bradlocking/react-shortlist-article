import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, select as $ } from 'glamor';
import dateFormat from 'dateformat';

// Import required components
import HeroImage from './HeroImage.jsx';
import Author from './Author.jsx';


// Defined styles for heading component
let hero = css({
  position: 'relative',
  background: '#252525'
})

let container = css({ 
  maxWidth: '800px',
  paddingLeft: 25,
  paddingRight: 25,
  margin: '0 auto'
})

let textContent = css({ 
  zIndex: 1,
  position: 'relative',
  padding: '60px 0',
  '& > *': { color: '#ffffff' }
})


class Heading extends Component {
  render() {
  
    // Put props into smaller constant name
  	const heading = this.props;

    return (
    	<section className="hero" {...hero}>
    		<div className="container" {...container}> 
          <div className="textContent" {...textContent}>
            <span>{heading.category.name}</span>
            <h1>{ heading.title }</h1>
            <Author author={heading.author} />
            <span className="articleDate">{ dateFormat(this.props.date, "fullDate") }</span>
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