import React from 'react';
import Input from './Input.js'
import List from './List.js';
import Submit from './Submit.js'
import './Form.css';

class DeliveryForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		function clientList() {
			return ['Екатерина', 'Максим'];
		};
		function courierList() {
			return ['Андрей', 'Алексей'];
		};
		return (
			<form className={this.props.class_name}>
				<Input class_name='small_label' type='text' label='Номер заказа' />
				<Input class_name='small_label' type='text' label='Стоимость заказа' />
				<List class_name='small_label' label='Клиент' list={clientList()} id='client'  />
				<List class_name='small_label' label='Курьер' list={courierList()} id='courier' />

				<Submit value='Создать путевой лист' />
			</form>
		);
	}
}

export default DeliveryForm;