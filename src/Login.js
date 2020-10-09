import React from 'react';
import LoginForm from './LoginForm.js';
import './App.css'


class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
        	<header className="header">
				<LoginForm class_name="vertical_form" />
			</header>
		);
	}
}


export default Login;