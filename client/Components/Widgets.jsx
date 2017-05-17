import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, select as $ } from 'glamor';

import Heading from './Widgets/WidgetHeading.jsx';
import Image from './Widgets/WidgetImage.jsx';
import Paragraph from './Widgets/WidgetParagraph.jsx';

const componentRegistry = {
  "heading": Heading,
  "image": Image,
  "paragraph": Paragraph,
}

let widgetsContainer = css({ 
  maxWidth: '800px',
  margin: '0 auto',
  padding: '50px 25px 50px 25px'
})

let widgetPlusWidget = $('& > div + div', {
  marginTop: 40
})

class Widgets extends Component {
  render() {

  	const { widgets } = Object.assign({}, this.props);

    return (
     <div className="widget-container container" {...css(widgetsContainer, widgetPlusWidget)} >
        
     	{
     		widgets.map( (data, key) => {
     			const WidgetType = componentRegistry[data.acf_fc_layout];
     			return <WidgetType 
                    key={key} 
                    thisKey={key} 
                    {...widgets[key]}  
                 />;
     		})
     	}

     </div>);
  }
} 

Widgets.propTypes = {
  widgets: React.PropTypes.array.isRequired
}  

export default Widgets;