import React from 'react';
import ClientForm from './ClientForm.js';
import Nav from './Nav.js'
import './App.css'

class Client extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="header">
				<Nav />
				<ClientForm class_name='block_form' />
			</header>
		);
	}
}

export default Client;