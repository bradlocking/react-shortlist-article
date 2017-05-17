import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

class WidgetHeading extends Component {
  render() {
  	// Dynamic styles from props
  	let heading = css({
  	  'textAlign': this.props.alignment,
  	  'color': `${this.props.heading_text_colour ? this.props.heading_text_colour : '#252525'}`,
  	})

    return (
      <div data-widget={this.props.acf_fc_layout}>
        <h2 {...heading}>{this.props.text}</h2>
      </div>
     );
  }
} 

WidgetHeading.propTypes = {
	acf_fc_layout: React.PropTypes.string.isRequired,
	alignment: React.PropTypes.string,
	font: React.PropTypes.string,
	heading_text_colour: React.PropTypes.string,
	heading_underline_colour: React.PropTypes.string,
	hide_widget_from_page: React.PropTypes.bool,
	text: React.PropTypes.string.isRequired
}

export default WidgetHeading;