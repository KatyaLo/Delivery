import React from 'react';
import './Nav.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav>
				<a href="/delivery" className="link">Новая доставка</a>
				<a href="/client" className="link">Добавить клиента</a>
				<a href="/courier" className="link">Добавить курьера</a>
				<a href="/calc" className="link">Расчет ЗП</a>
				<a href="" className="link">История</a>
				<a href="/login" className="link">Выйти</a>
			</nav>
		);
	}
}

export default Nav;