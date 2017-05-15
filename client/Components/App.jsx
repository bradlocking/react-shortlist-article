/*
    ./client/components/App.js
*/
import React from 'react';


// Import any required components
import Article from './Article.jsx';


export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        
     	<Article />

     </div>);
  }
} 