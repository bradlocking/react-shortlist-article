import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

class HeroImage extends Component {
  render() {
    // Desctructuring the props as only the imageData prop needs to be used here. 
    const { imageData } = this.props

    // Sat glamor styles for Image within component to retrieve the image prop to apply to the backgroudImage
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
      opacity: 0.4,
      imageRendering: 'optimizeQuality'
    })

    // Set width, height and opacity to zero so that image is hidden but still recognisable by 
    // sharing plugins like Pinterest
    let figureImage = css({
      width: 0,
      height: 0,
      opacity: 0
    })

    return (
        <figure {...figureBackground}>
          { /* included image tag for SEO */ }
          <img src={imageData.sizes.letterbox} alt={imageData.alt}  {...figureImage}/>
          }
        </figure>
     );
  }
}

HeroImage.propTypes = {
  imageData:  React.PropTypes.object.isRequired
} 

export default HeroImage;