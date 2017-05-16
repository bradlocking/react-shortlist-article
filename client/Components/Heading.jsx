import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, select as $ } from 'glamor'

import HeroImage from './HeroImage.jsx';
import Author from './Author.jsx';


let hero = css({
  position: 'relative',
  ':before': { content: 'ssdpgph' }
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
  padding: '40px 0',
  '& > *': { color: '#ffffff' }
})

let paragraph = css({
  
})

let categoryName = css({

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