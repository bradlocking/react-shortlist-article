import React from 'react';
import { css } from 'glamor';
import 'glamor/reset';

// Import any required components
import Article from './Article.jsx';

css.global('html, body', { 
		padding: 0, 
	    position: 'relative',
	    height: '100%',
	    margin: 0,
	    minWidth: '320px',
		fontFamily: '"Montserrat", sans-serif',
	    fontSize: '17px',
	    fontWeight: 300,
	    lineHeight: 1.5,
		color: '#252525',
		background: '#f8f8f8',
		'@media(maxWidth: 768px)': { fontSize: 16 }
	}
)

css.global('figure', { margin: 0 })

export default class App extends React.Component {
  render() {
    return (
     <div>
     	<Article />
     </div>);
  }
} 