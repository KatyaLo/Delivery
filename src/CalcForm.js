import React from 'react';
import List from './List.js';
import Submit from './Submit.js'
import './Form.css';

class CalcForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		function courierList() {
			return ['Андрей', 'Алексей'];
		};
		function serviceList() {
			return ['Комсомольская', 'Буденовский'];
		};
		return (
			<form className={this.props.class_name}>
				<List label='Курьер' list={courierList()} id='courier' />
				<Submit value='Расчет ЗП Курьера' />
				<br />
				<List label='Сервис' list={serviceList()} id='service' />
				<Submit value='Расчет ЗП Cервиса' />
			</form>
		);
	}
}

export default CalcForm;