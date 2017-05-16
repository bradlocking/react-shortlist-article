import React, {Component, PropTypes} from 'react';

class WidgetHeading extends Component {
  render() {
    return (
        <div data-widget={this.props.acf_fc_layout}>
            <h2>{this.props.text}</h2>
        </div>
     );
  }
} 

export default WidgetHeading;