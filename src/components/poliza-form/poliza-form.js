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
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
      subgrupo: "0",
      nombreDesarrollo: "",
      sinCosto: false,
      comentarios: "",
      textoSubGrupo: [{
        sumaAsegurada: "",
        deducible: ""
      },
      {
        sumaAsegurada: " 500 UMAM",
        deducible: " 9.9 UMAM"
      },
      {
        sumaAsegurada: " 500 UMAM",
        deducible: " 2.9 UMAM"
      },
      {
        sumaAsegurada: " 200 UMAM",
        deducible: " 2.9 UMAM"
      },
      {
        sumaAsegurada: " 10,000 UMAM",
        deducible: " 4.9 UMAM"
      }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSwitch = this.handleChangeSwitch.bind(this);

  }

  //Metodo para hacer el double binding
  handleChange(event) {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleChangeSwitch(event) {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.checked,
    });
  }

  verificarParentesco() {
    if (this.state.parentesco === "Conyuge" || this.state.parentesco === "Hijo") {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log(this.state)
    const titular = this.verificarParentesco()
    let subgrupo = parseInt(this.state.subgrupo, 10)
    return (
      <div>
        <form className="form">
          <FormControl
            fullWidth
            margin='dense'
          >
            <TextField
              id="primerNombre"
              label="Primer Nombre"
              value={this.state.primerNombre}
              onChange={this.handleChange}
              required={true}
            />
            <TextField
              id="segundoNombre"
              label="Segundo Nombre"
              value={this.state.segundoNombre}
              onChange={this.handleChange}
            />
            <TextField
              id="tercerNombre"
              label="Tercer Nombre"
              value={this.state.tercerNombre}
              onChange={this.handleChange}
            />
            <TextField
              id="apellidoPaterno"
              label="Apellido Paterno"
              value={this.state.apellidoPaterno}
              onChange={this.handleChange}
              required={true}
            />
            <TextField
              id="apellidoMaterno"
              label="Apellido Materno"
              value={this.state.apellidoMaterno}
              onChange={this.handleChange}
              required={true}
            />
          </FormControl>

          <div className="selects" >
            <FormControl
              margin='dense'
            >
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
          </div>

          <div className="selects" >
            <FormControl
              margin='dense'
            >
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
          </div>
          {titular ?
            <form className="form">
              <h3>Datos Titular</h3>
              <FormControl
                fullWidth
                margin='dense'
              >
                <TextField
                  id="primerNombre"
                  label="Primer Nombre"
                  value={this.state.primerNombre}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="segundoNombre"
                  label="Segundo Nombre"
                  value={this.state.segundoNombre}
                  onChange={this.handleChange}
                />
                <TextField
                  id="tercerNombre"
                  label="Tercer Nombre"
                  value={this.state.tercerNombre}
                  onChange={this.handleChange}
                />
                <TextField
                  id="apellidoPaterno"
                  label="Apellido Paterno"
                  value={this.state.apellidoPaterno}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="apellidoMaterno"
                  label="Apellido Materno"
                  value={this.state.apellidoMaterno}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="numPoliza"
                  label="Numero de Poliza"
                  value={this.state.numPoliza}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="familia"
                  label="Familia"
                  value={this.state.famila}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="cis"
                  label="CIS"
                  value={this.state.cis}
                  onChange={this.handleChange}
                  required={true}
                />
                <TextField
                  id="certificado"
                  label="Certificado"
                  value={this.state.certificado}
                  onChange={this.handleChange}
                  required={true}
                />
              </FormControl>
            </form>
            :
            <div></div>
          }

          <div className="selects" >
            <TextField
              id="fechaNacimiento"
              label="Fecha de Nacimiento"
              type="date"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="selects" >
            <TextField
              id="fechaAntiguedad"
              label="Fecha de Antiguedad"
              type="date"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <h2>Sub Grupo</h2>
          <div className="radiobotones">
            <RadioGroup
              value={this.state.subgrupo}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel value="1" control={<Radio id="subgrupo" checked={this.state.subgrupo === "1"} />} label="I" />
              <FormControlLabel value="2" control={<Radio id="subgrupo" checked={this.state.subgrupo === "2"} />} label="II" />
              <FormControlLabel value="3" control={<Radio id="subgrupo" checked={this.state.subgrupo === "3"} />} label="III" />
              <FormControlLabel value="4" control={<Radio id="subgrupo" checked={this.state.subgrupo === "4"} />} label="IV" />
            </RadioGroup>
          </div>

          <Card >
            <CardContent>
              <Typography component="p">
                Deducible:
                {this.state.textoSubGrupo[subgrupo].deducible}
              </Typography>
              <Typography component="p">
                Suma Asegurada:
                {this.state.textoSubGrupo[subgrupo].sumaAsegurada}
              </Typography>
            </CardContent>
          </Card>

          <TextField
            id="nombreDesarrollo"
            label="Nombre del Desarrollo"
            value={this.state.nombreDesarrollo}
            onChange={this.handleChange}
            fullWidth
            margin="dense"
          />
          <FormControlLabel
            control={
              <Switch
                id="sinCosto"
                onChange={this.handleChangeSwitch}
                checked={this.state.sinCosto}
                value={true}
              />
            }
            label="Sin Costo"
          />
          <TextField
            id="comentarios"
            label="Comentarios"
            value={this.state.comentarios}
            onChange={this.handleChange}
            fullWidth
            margin="dense"
            multiline={true}
            rows={2}
            rowsMax={4}
          />
          <div className="botonEnviar">
            <Button variant="outlined" color="primary" >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    );
  }

}
export default PolizaForm;