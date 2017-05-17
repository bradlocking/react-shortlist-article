import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css, select as $ } from 'glamor'

let paragraph = css({
  '& p': { 
    margin: 0,
    fontSize: 18,
    lineHeight: '32px'
  },
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

WidgetParagraph.propTypes = {
  acf_fc_layout: PropTypes.string.isRequired,
  hide_widget_from_page: PropTypes.bool.isRequired,
  paragraph: PropTypes.string.isRequired,
  thisKey: PropTypes.number.isRequired
} 

export default WidgetParagraph;