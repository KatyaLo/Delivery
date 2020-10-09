import React from 'react';
import Nav from './Nav.js';
import CalcForm from './CalcForm.js'

import './App.css';

class Calc extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		function courierList() {
			return ['Андрей', 'Алексей'];
		};

		return (
			<header className="header">
				<Nav />
				
				<CalcForm class_name='vertical_form' />
			</header>
		);
	}
}

export default Calc;
