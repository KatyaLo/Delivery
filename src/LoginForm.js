import React from 'react';
import Input from './Input.js'
import List from './List.js';
import Submit from './Submit.js'
import './Form.css';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		function list() {
			return ['Анастасия', 'Екатерина', 'Юлия', 'Алексей']
		}
		return (
			<form className={this.props.class_name}>
				<List label='Имя'
					  list={list()}
					  id='login' />
				<Input label='Пароль'
					   type='password'/>
				<Submit value='Войти' />
			</form>
		);
	}
}

export default LoginForm;

