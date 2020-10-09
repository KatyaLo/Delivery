import React from 'react';
import './Submit.css'

class Submit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input className='submit'
				   type="submit"
				   value={this.props.value} />
		);
	}
}

export default Submit;