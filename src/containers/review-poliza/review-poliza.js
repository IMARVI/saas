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
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import './review-poliza.css'



class ReviewPoliza extends Component {
  constructor() {
    super();
    this.state = {
      redirectTo: null,
      tipoSeguro: 0,
      primerNombre: '',
      segundoNombre: '',
      tercerNombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      genero: "",
      parentesco: "",
      primerNombreTitular: '',
      segundoNombreTitular: '',
      tercerNombreTitular: '',
      apellidoPaternoTitular: '',
      apellidoMaternoTitular: '',
      numPoliza: "",
      famila: "",
      cis: "",
      certificado: "",
      fechaNacimiento: "",
      fechaAntiguedad: "",
      fechaSolicitud: "",
      fechaAlta: "",
      subgrupo: "0",
      nombreDesarrollo: "",
      sinCosto: false,
      comentarios: "",
      elaboraPrimerNombre: "",
      elaboraSegundoNombre: "",
      elaboraTercerNombre: "",
      elaboraPaterno: "",
      elaboraMaterno: "",
      altaPrimerNombre: "",
      altaSegundoNombre: "",
      altaTercerNombre: "",
      altaPaterno: "",
      altaMaterno: "",
      altaEmpresa: "",
      altaPlaza: "",
      altaGenero: "",
      textoSubGrupo: [{
        sumaAsegurada: "",
        deducible: ""
      },
      {
        sumaAsegurada: " 500 UMAM",
        deducible: " 2 UMAM"
      },
      {
        sumaAsegurada: " 500 UMAM",
        deducible: " 2 UMAM"
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelarMod = this.cancelarMod.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const nombre = this.state.primerNombre
    const apellido = this.state.apellidoPaterno
    const fullNombre = nombre + " " + apellido
    const seguro = "Gastos Medicos"
    const usuario = [fullNombre, seguro, 0, 0]
    this.props.setUsuarios(usuario)

    this.setState({
      redirectTo: '/'
    })
    /*
    const datos = {
      user: this.state.email,
      password: this.state.password,
      header: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }

    axios.post('https://el-equipo-perro.mybluemix.net/company/login', datos)
      .then(response => {
        console.log(response)
        if (response.data.payload === true) {
          this.props.setUser(this.state.email)
          this.props.loggedIn()
          this.setState({
            redirectTo: '/home'
          })
        }
        else {
          this.setState({
            email: '',
            password: ''
          })
        }
      })
      .catch(error => {
        console.log("No se encontro el usuario")
        console.error(error);
      });*/
  }

  componentDidMount(){
    this.setState({
      ...this.props.usuario1
    });
  }

  cancelarMod(){
    this.setState({
      redirectTo: "/"
    })
  }


  render() {
    console.log(this.state)
    console.log(this.props.match.params.id_poliza)

    const titular = this.verificarParentesco()
    let subgrupo = parseInt(this.state.subgrupo, 10)
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="pol">
            <FormControl
              margin='dense'
              className="nombres"
            >
              <TextField
                id="primerNombre"
                label="Primer Nombre"
                value={this.state.primerNombre}
                onChange={this.handleChange}
                required
              />
            </FormControl>
            <FormControl
              margin='dense'
              className="nombres"
            >
              <TextField
                id="segundoNombre"
                label="Segundo Nombre"
                value={this.state.segundoNombre}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl
              margin='dense'
              className="nombres"
            >
              <TextField
                id="tercerNombre"
                label="Tercer Nombre"
                value={this.state.tercerNombre}
                onChange={this.handleChange}
              />
            </FormControl>

            <div>
              <FormControl
                margin='dense'
                className="apellidos"
              >
                <TextField
                  id="apellidoPaterno"
                  label="Apellido Paterno"
                  value={this.state.apellidoPaterno}
                  onChange={this.handleChange}
                  required={true}
                />
              </FormControl>
              <FormControl
                margin='dense'
                className="apellidos"
              >
                <TextField
                  id="apellidoMaterno"
                  label="Apellido Materno"
                  value={this.state.apellidoMaterno}
                  onChange={this.handleChange}
                  required={true}

                />
              </FormControl>
            </div>

            <div className="selects" >
              <FormControl>
                <InputLabel htmlFor="titulo">Genero</InputLabel>
                <Select
                  id="genero"
                  displayEmpty={true}
                  native
                  value={this.state.genero}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" />
                  <option value={"Hombre"}>Hombre</option>
                  <option value={"Mujer"}>Mujer</option>
                </Select>
              </FormControl>
            </div>

            <div className="selects" >
              <FormControl>
                <InputLabel htmlFor="titulo">Parentesco</InputLabel>
                <Select
                  id="parentesco"
                  displayEmpty={true}
                  native
                  value={this.state.parentesco}
                  onChange={this.handleChange}
                  required
                >
                  <option value="" />
                  <option value={"Titular"}>Titular</option>
                  <option value={"Conyuge"}>Conyuge</option>
                  <option value={"Hijo"}>Hijo</option>
                </Select>
              </FormControl>
            </div>
            {titular ?
              <div className="datosTitular">
                <h3>Datos Titular</h3>
                <FormControl
                  fullWidth
                  margin='dense'
                  
                >
                  <TextField
                    id="primerNombreTitular"
                    label="Primer Nombre"
                    value={this.state.primerNombreTitular}
                    onChange={this.handleChange}
                    required={true}
                  />
                  <TextField
                    id="segundoNombreTitular"
                    label="Segundo Nombre"
                    value={this.state.segundoNombreTitular}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="tercerNombreTitular"
                    label="Tercer Nombre"
                    value={this.state.tercerNombreTitular}
                    onChange={this.handleChange}
                  />
                  <TextField
                    id="apellidoPaternoTitular"
                    label="Apellido Paterno"
                    value={this.state.apellidoPaternoTitular}
                    onChange={this.handleChange}
                    required={true}
                  />
                  <TextField
                    id="apellidoMaternoTitular"
                    label="Apellido Materno"
                    value={this.state.apellidoMaternoTitular}
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
              </div>
              :
              <div></div>
            }
            <br />
            <div className="selects" >
              <FormControl>
                <FormLabel component="legend">Fecha de Nacimiento</FormLabel>
                <TextField
                  id="fechaNacimiento"
                  type="date"
                  value={this.state.fechaNacimiento}
                  onChange={this.handleChange}
                  required
                />
              </FormControl>
            </div>

            <div className="selects" >
              <FormControl>
                <FormLabel component="legend">Fecha de Antiguedad</FormLabel>
                <TextField
                  id="fechaAntiguedad"
                  type="date"
                  value={this.state.fechaAntiguedad}
                  onChange={this.handleChange}
                  required
                />
              </FormControl>
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

            <Card
              className="texts">
              <CardContent>
                <p>
                  Deducible:
                {this.state.textoSubGrupo[subgrupo].deducible}
                </p>
                <p>
                  Suma Asegurada:
                {this.state.textoSubGrupo[subgrupo].sumaAsegurada}
                </p>
              </CardContent>
            </Card>

            <TextField
              className="texts"
              id="nombreDesarrollo"
              label="Nombre del Desarrollo"
              value={this.state.nombreDesarrollo}
              onChange={this.handleChange}
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
              label="Sin costo"
            />
            <TextField
              id="comentarios"
              label="Comentarios"
              value={this.state.comentarios}
              onChange={this.handleChange}
              className="texts"
              margin="dense"
              rows={2}
              rowsMax={4}
            />
            <div>
              <Button variant="outlined" color="primary" type="submit"className="botones" >
                Aceptar
              </Button>
              <Button variant="outlined" color="secondary" onClick={this.cancelarMod} className="botones" >
                Rechazar
              </Button>
            </div>
          </form>
        </div>
      );
    }
  }

}

//Con este metodo mandamos a llamar los valores que hay en redux
const mapStateToProps = state => {
  return {
    usuarios: state.usuarios,
    usuario1: state.usuario
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsuarios: (users) => dispatch({ type: 'SET_USR', users: users }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPoliza);
