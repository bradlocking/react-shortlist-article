import React, {Component, PropTypes} from 'react';
import { css } from 'glamor';

class HeroImage extends Component {
  render() {

    const { imageData } = this.props

    let figureBackground = css({ 
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundImage: `url(${imageData.sizes.letterbox})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      padding: 0,
      imageRendering: 'optimizeQuality'
    })

    return (
        <figure {...figureBackground}>

        </figure>
     );
  }
} 

export default HeroImage;