import React from 'react';
import './Input.css';

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert(this.state.value);
		event.preventDefault();
	}

	render() {
		return (
		<label className={this.props.class_name}>
			{this.props.label}
			<input type={this.props.type} 
				   value={this.state.value}
				   onChange={this.handleChange}
				   placeholder={this.props.placeholder}
				   pattern={this.props.pattern}
				   min={this.props.min}
				   max={this.props.max}
				   required
				    />
		</label>
		)
	}
}

export default Input;
