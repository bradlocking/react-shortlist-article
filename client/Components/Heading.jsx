import React, {Component, PropTypes} from 'react';

import HeroImage from './HeroImage.jsx'

class Heading extends Component {
  render() {

  	const heading = this.props;

    return (
    	<section className="heading">
    		<div className="container">
    			<h1>{ heading.title }</h1>
    			<p>{ heading.sell }</p>
    			<HeroImage imageData={heading.heroImage[0]} />
    		</div>
    	</section>
     );
  }
} 

export default Heading;