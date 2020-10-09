import React from 'react';
import DeliveryForm from './DeliveryForm.js';
import Nav from './Nav.js'
import './App.css'

class Delivery extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<Nav />
				<DeliveryForm class_name='block_form' />
			</header>
		);
	}
}

export default Delivery;