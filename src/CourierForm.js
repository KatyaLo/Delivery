import React from 'react';
import Input from './Input.js'
import List from './List.js';
import Submit from './Submit.js'
import './Form.css';

class CourierForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className={this.props.class_name}>
				<Input type='text' label='ФИО' placeholder='Иванов Иван Иванович' />
				<Input label='Номер телефона' 
					   type='tel' 
					   placeholder='+7 999 999-99-99'
					   pattern='\+7\ [0-9]{3}\-[0-9]{2}\-[0-9]{2}' /> 
				
				<Submit value='Добавить курьера' />
			</form>
		);
	}
}

export default CourierForm;