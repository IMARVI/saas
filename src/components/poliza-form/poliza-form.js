import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './poliza-form.css'



class PolizaForm extends Component {

  constructor() {
    super();
    this.state = {
      primerNombre: '',
      segundoNombre: '',
      tercerNombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      genero: "",
      parentesco: "",
      numPoliza: "",
      famila: "",
      cis: "",
      certificado: "",
      fechaNacimiento: null,
      fechaAntiguedad: null,
      subgrupo: null,
      nombreDesarrollo: "",
      sinCosto: true
    };
    this.handleChange = this.handleChange.bind(this);

  }

  //Metodo para hacer el double binding
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  verificarParentesco() {
    if (this.state.parentesco == "Conyuge" || this.state.parentesco == "Hijo") {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log(this.state)
    const titular = this.verificarParentesco()

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

          <FormControl>
            <InputLabel htmlFor="titulo">Genero</InputLabel>
            <Select
              id="genero"
              displayEmpty={true}
              native
              value={this.state.genero}
              onChange={this.handleChange}
            >
              <option value="" />
              <option value={"Hombre"}>Hombre</option>
              <option value={"Mujer"}>Mujer</option>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="titulo">Parentesco</InputLabel>
            <Select
              id="parentesco"
              displayEmpty={true}
              native
              value={this.state.parentesco}
              onChange={this.handleChange}
            >
              <option value="" />
              <option value={"Titular"}>Titular</option>
              <option value={"Conyuge"}>Conyuge</option>
              <option value={"Hijo"}>Hijo</option>
            </Select>
          </FormControl>
          {titular ?
            <form className="form">
              <h3>Datos Titular</h3>
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
              <TextField
                id="numPoliza"
                label="Numero de Poliza"
                value={this.state.numPoliza}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="familia"
                label="Familia"
                value={this.state.famila}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="cis"
                label="CIS"
                value={this.state.cis}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="certificado"
                label="Certificado"
                value={this.state.certificado}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
            :
            <div></div>
          }
          <TextField
            id="fechaNacimiento"
            label="Fecha de Nacimiento"
            type="date"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="fechaAntiguedad"
            label="Fecha de Antiguedad"
            type="date"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <h2>Sub Grupo</h2>
          <RadioGroup
            value={this.state.subgrupo}
            onChange={this.handleChange}
          >
            <FormControlLabel value="1" control={<Radio id = "subgrupo" checked={this.state.subgrupo === "1"} />} label="I" />
            <FormControlLabel value="2" control={<Radio id = "subgrupo" checked={this.state.subgrupo === "2"} />} label="II" />
            <FormControlLabel value="3" control={<Radio id = "subgrupo" checked={this.state.subgrupo === "3"} />} label="III" />
            <FormControlLabel value="4" control={<Radio id = "subgrupo" checked={this.state.subgrupo === "4"} />} label="IV" />
          </RadioGroup>

          <TextField
            id="nombreDesarrollo"
            label="Nombre del Desarrollo"
            value={this.state.nombreDesarrollo}
            onChange={this.handleChange}
            fullWidth
          />
          <FormControlLabel
          control={
            <Switch
              id ="sinCosto"
              checked={ this.state.sinCosto}
              onChange={this.handleChange}
            />
          }
          label="Sin Costo"
        />
        </form>
      </div>
    );
  }

}
export default PolizaForm;