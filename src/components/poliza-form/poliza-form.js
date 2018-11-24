import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './poliza-form.css'


class PolizaForm extends Component {

  constructor() {
    super();
    this.state = {
      primerNombre: '',
      segundoNombre:'',
      tercerNombre:'',
      apellidoPaterno: '',
      apellidoMaterno: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  //Metodo para hacer el double binding
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form className="form">
        <TextField
          id="primerNombre"
          label="Primer Nombre"
          value={this.state.primerNombre}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id="segundoNombre"
          label="Segundo Nombre"
          value={this.state.segundoNombre}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id="tercerNombre"
          label="Tercer Nombre"
          value={this.state.tercerNombre}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id="apellidoPaterno"
          label="Apellido Paterno"
          value={this.state.apellidoPaterno}
          onChange={this.handleChange}
          fullWidth
        />
        <TextField
          id="apellidoMaterno"
          label="Apellido Materno"
          value={this.state.apellidoMaterno}
          onChange={this.handleChange}
          fullWidth
        />
        
        </form>
      </div>
    );
  }

}
export default PolizaForm;