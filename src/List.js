import React from 'react';
import './Input.css';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label className={this.props.class_name}>
				{this.props.label}
				<input list={this.props.id} required />
				<datalist id={this.props.id}>
					{ this.props.list.map(name => ( <option value={name} /> )) }
					
				</datalist>
			</label>
		);
	}
}

export default List;
{/*<option value="Анастасия" />
					<option value="Екатерина" />
					<option value="Юлия" />
					<option value="Алексей" />*/}