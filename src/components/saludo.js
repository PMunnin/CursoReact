import React, { Component, PropTypes } from 'react';

class Saludo extends Component {
	render(){
		const { text, user } = this.props;
		return(
			<div>{ text }, { user.nombre + ' ' + user.apellido }</div>
		)
	}
}

Saludo.PropTypes = {
	text: PropTypes.string, 
	user: PropTypes.shape({
		nombre: PropTypes.string.isRequired,
		apellido: PropTypes.string.isRequired
	})
}

export default Saludo;