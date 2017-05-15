import React, {Component, PropTypes} from 'react';

class HeroImage extends Component {
  render() {

    const { imageData } = this.props

    const styles = {
        figure: {
          backgroundImage: `url(${imageData.sizes.letterbox})`
        }
    }

    return (
        <figure style={styles.figure}>

        </figure>
     );
  }
} 

export default HeroImage;