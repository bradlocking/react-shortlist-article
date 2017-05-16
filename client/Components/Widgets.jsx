import React, { Component } from 'react';

import Heading from './Widgets/WidgetHeading.jsx';
import Image from './Widgets/WidgetImage.jsx';
import Paragraph from './Widgets/WidgetParagraph.jsx';

const componentRegistry = {
    "heading": Heading,
    "image": Image,
    "paragraph": Paragraph,
}


class Widgets extends Component {
  render() {

  	// const { widgets } = this.props;

  	const { widgets } = Object.assign({}, this.props);

    return (
     <div className="widget-container" style={{textAlign: 'center'}}>
        
     	{
     		widgets.map( (data, key) => {
     			const WidgetType = componentRegistry[data.acf_fc_layout];
     			return <WidgetType key={key} thisKey={key} {...widgets[key]} />;
     		})
     	}

     </div>);
  }
} 

export default Widgets;