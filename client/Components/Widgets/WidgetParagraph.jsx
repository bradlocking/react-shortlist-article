import React, {Component, PropTypes} from 'react';

class WidgetParagraph extends Component {
  render() {
    return (
        <div 
        	/* apply data attribute to widget for styling purposes. */
        	data-widget={this.props.acf_fc_layout} 

        	/* pass paragraph through dangerouslySetInnerHTML to prevent potential XSS attacks. */
        	dangerouslySetInnerHTML={{__html: this.props.paragraph}} 
        />
     );
  }
} 

export default WidgetParagraph;