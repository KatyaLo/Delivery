import React from 'react';
import Input from './Input.js'
import List from './List.js';
import TextArea from './Textarea.js'
import Submit from './Submit.js'
import './Form.css';

class ClientForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className={this.props.class_name}>
				<Input class_name='small_label' 
					   label='ФИО' 
					   type='text'
					   placeholder='Иванов Иван Иванович' />
				<Input class_name='small_label' 
					   label='Номер телефона' 
					   type='tel' 
					   placeholder='+7 999 999-99-99'
					   pattern='\+7\ [0-9]{3}\-[0-9]{2}\-[0-9]{2}' /> 
				<Input label='Название сервиса' type='text' />
				<Input class_name='small_label'
					   label='Станция метро (Номер выхода)'
					   type='text'
					   placeholder='Комсомольская (11)' />
				<Input class_name='small_label'
					   label='Стоимость доставки'
					   type='number'
					   placeholder='350'
					   min='350'
					   max='850' />
				<TextArea label='Описание маршрута' rows='7' />
				<Submit value='Добавить клиента' />
			</form>
		);
	}
}

export default ClientForm;