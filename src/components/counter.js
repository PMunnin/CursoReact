import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super(); //llama a Component del que extiende para permitir usar THIS
    this.state = {
      clicks: 0
    }
    this.handleClick = this.handleClick.bind(this); //permite que el this del render coja el del constructor
  }

  handleClick(){//invocamos desde el render, this.handleClick
    this.setState({//cambia el estado del constructor cada vez que hay un click
      clicks: this.state.clicks + 1
    });
  }

  render(){
      return(
        <button onClick={ this.handleClick }>{this.state.clicks}</button>//cada vez que renderiza al hacer click, activa handleClick que aumenta el estado, l 12, y muestra el estado del constructor
      )
  }
}

export default Counter;
