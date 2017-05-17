import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

// Styling up the image itself
let imageStyles = css({ 
  width: '100%',
  display: 'block'
})

// Style the caption for the image
let imageCaption = css({ 
  color: '#8a8a8a',
  fontWeight: '300',
  fontAize: '14px',
  textAlign: 'center',
  display: 'inline-block',
  margin: '0 auto',
  marginTop: '13px',
  borderRadius: '10px'
})


class WidgetImage extends Component {
  render() {

  	const image = this.props;

    return (
        <div data-widget={image.acf_fc_layout}>
        	<figure>
        		<img src={image.image.url} alt={image.alt} {...imageStyles} />

            <figcaption 
              dangerouslySetInnerHTML={{__html: image.caption }} 
              {...imageCaption}
            />

        	</figure>
        </div>
     );
  }
}

WidgetImage.propTypes = {
  acf_fc_layout: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
  caption: React.PropTypes.string,
  crop: React.PropTypes.string,
  has_mobile_image: React.PropTypes.bool,
  hide_widget_from_page: React.PropTypes.bool,
  image: React.PropTypes.object.isRequired,
  link: React.PropTypes.string,
  mobile_image: React.PropTypes.bool,
  open_link_in_new_tab: React.PropTypes.bool,
  position: React.PropTypes.string,
  width: React.PropTypes.string
} 

export default WidgetImage;