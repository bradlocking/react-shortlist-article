import React, {Component, PropTypes} from 'react';
import { css, select as $ } from 'glamor'

let paragraph = css({
  '& p': { margin: 0 },
})


class WidgetParagraph extends Component {
  render() {
    return (
        <div 
        	/* apply data attribute to widget for styling purposes. */
        	data-widget={this.props.acf_fc_layout} 

        	/* pass paragraph through dangerouslySetInnerHTML to prevent potential XSS attacks. */
        	dangerouslySetInnerHTML={{__html: this.props.paragraph}} 

        	/* styling reset for paragraph */ 
        	{...paragraph}
        />
     );
  }
} 

export default WidgetParagraph;