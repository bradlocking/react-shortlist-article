import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { css, select as $ } from 'glamor';

let dash = css.keyframes('dash', {
  '0%': {
    strokeDasharray: '1,150',
    strokeDashoffset: '0'
  },
  '50%': {
    strokeDasharray: '90,150',
    strokeDashoffset: '-35'
  },
  '100%': {
    strokeDasharray: '90,150',
    strokeDashoffset: '-124'
  }
})

let rotate = css.keyframes('rotate', { 
  '100%': { transform: 'rotate(360deg)' }
})

let loader = css({
	position: 'fixed', 
	left:0,
	top:0,
	right:0, 
	bottom:0, 
	zIndex: 100, 
	transition: 'opacity 0.5s ease',
	background: 'rgba(255,255,255,0.8)',
  '&.hide-loader': { opacity:0 },
  '&.hide-loader': { zIndex: -1 },
  '& .spinner-container': {
  	animation: `${rotate} 2s linear infinite`,
  	zIndex: 100,
  	position: 'absolute',
  	left: '50%',
  	top: '50%',
  	margin: '-32px 0 0 -32px'
  },
  '& .path': {
		strokeDasharray: '1, 150',
		strokeDashoffset: 0,
		stroke: '#5b5b96',
		strokeLinecap: 'round',
		animation: `${dash} 1.5s ease-in-out infinite`
  } 
})

const Loading = () => {
  return (
    <div className="loader" disabled  {...loader}>
      <svg className="spinner-container" width="65px" height="65px" viewBox="0 0 52 52">
        <circle className="path" cx="26px" cy="26px" r="20px" fill="none" strokeWidth="2px"></circle>
      </svg>
    </div>
  );
};

export default Loading;