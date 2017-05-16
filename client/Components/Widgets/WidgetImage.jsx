import React, {Component, PropTypes} from 'react';

class WidgetImage extends Component {
  render() {

  	const image = this.props;

    return (
        <div data-widget={image.acf_fc_layout}>
        	<figure>
        		<img src={image.image.url} alt={image.alt}/>
        		<figcaption 
        			dangerouslySetInnerHTML={{__html: image.caption }} 
        		/>
        	</figure>
        </div>
     );
  }
} 

export default WidgetImage;