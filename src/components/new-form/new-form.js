import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Select from '@material-ui/core/Select';


import './new-form.css'

class NewForm extends Component {

  constructor() {
    super();
    this.state = {
      redirectTo:null,
      redirect: false,
      nombre: "",
      apellido: "",
      username: "",
      password: "",
      role: "",
      company:"",
      passInvalido: false,
      mensaje: false,
      errores: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  //Metodo para hacer el double binding
  handleChange(event) {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleChange2(event) {
    console.log(event.name)
    this.setState({
      [event.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const pass = this.state.password;
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/g;
    let test = reg.test(pass);

    if (test) {
      this.setState({
        redirectTo: '/'
      })
    } else {

      let err = []
      if (pass.length !== 8) {
        err.push("Password: Debe de contener exactamente 8 caracteres")
      }

      let min = /(?=.*[a-z])/g;
      test = min.test(pass);
      if (!test) {
        err.push("Password: Debe de contener al menos una letra minuscula")
      }

      min = /(?=.*[A-Z])/g;
      test = min.test(pass);
      if (!test) {
        err.push("Password: Debe de contener al menos una letra mayuscula")
      }

      min = /(?=.*[0-9])/g;
      test = min.test(pass);
      if (!test) {
        err.push("Password: Debe de contener al menos un numero")
      }

      this.setState({
        passInvalido: true,
        mensaje: true,
        errores: err
      })
    }

  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClose = () => {
    this.setState({ mensaje: false });
  };

  render() {
    console.log(this.state)
    const passInvalido = this.state.passInvalido
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormControl
              margin='dense'
              className="campos"
            >
              <TextField
                id="nombre"
                label="Nombre"
                value={this.state.nombre}
                onChange={this.handleChange}
                required
              />
            </FormControl>

            <FormControl
              margin='dense'
              className="campos"
            >
              <TextField
                id="apellido"
                label="Apellido"
                value={this.state.apellido}
                onChange={this.handleChange}
                required
              />
            </FormControl>

            <FormControl
              margin='dense'
              className="campos"
            >
              <TextField
                id="username"
                label="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </FormControl>

            <FormControl
              margin='dense'
              className="campos"
            >
            <InputLabel htmlFor="titulo">Role</InputLabel>
              <Select
                id="role"
                displayEmpty={true}
                native
                value={this.state.role}
                onChange={this.handleChange}
                required
              >
                <option value="" />
                <option value={0}>Usuario Saas</option>
                <option value={1}>Recursos Humanos</option>
                <option value={2}>Colaborador</option>
              </Select>
            </FormControl>

            <FormControl
              margin='dense'
              className="campos"
            >
              <TextField
                id="company"
                label="Empresa"
                value={this.state.company}
                onChange={this.handleChange}
                required
              />
            </FormControl>

            <FormControl className="password" margin="dense">
              <Input
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleChange}
                required
                error={passInvalido}
                margin='dense'
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>


            <div className="botonEnviar">
              <Button variant="outlined" color="primary" type="submit" >
                Enviar
              </Button>
            </div>

            <Snackbar
              open={this.state.mensaje}
              autoHideDuration={3000}
              onClose={this.handleClose}
              TransitionComponent={Fade}
              variant="error"
              message={
                <div>
                  <span id="message-id">{this.state.errores[0]}</span>
                </div>}
            />

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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsuarios: (users) => dispatch({ type: 'SET_USR', users: users }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewForm);