import React from 'react';
import CourierForm from './CourierForm.js';
import Nav from './Nav.js'
import './App.css'

class Courier extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<Nav />
				<CourierForm class_name='vertical_form' />
			</header>
		);
	}
}

export default Courier;