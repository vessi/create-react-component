import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../dist/index';

class App extends React.Component { 
	render() {
		return <HelloWorld />;
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));