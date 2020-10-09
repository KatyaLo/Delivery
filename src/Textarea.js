import React from 'react';
import './Input.css'

class TextArea extends React.Component {
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
			<textarea type={this.props.type} 
				   value={this.state.value}
				   onChange={this.handleChange}
				   placeholder={this.props.placeholder}
				   rows={this.props.rows}
				   />
		</label>
		)
	}
}

export default TextArea;
