import React, {Component, PropTypes} from 'react';
import { css } from 'glamor';

let imageStyles = css({ 
  width: '100%',
  display: 'block'
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
        		/>
        	</figure>
        </div>
     );
  }
} 

export default WidgetImage;