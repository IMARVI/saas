import React, { Component } from "react";
import './tabulador.css'

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';

class Tabulador extends Component {
  constructor() {
    super();
    this.state = {
      plan: "",
      personas: [
        {
          id: 0,
          primerNombre: "",
          paterno: "",
          materno: "",
          genero: "",
          parentesco: "",
          plan: "",
          fechaNacimiento: ""
        }
      ]
    };

    this.agregarPersona = this.agregarPersona.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Metodo para hacer el double binding
  handleChange(event) {
    console.log("dentro de handle")
    console.log(event.target.value)
    let aux = event.target.id.split(',')
    let id = aux[0]
    let num = aux[1]
    let copia = JSON.parse(JSON.stringify(this.state.personas))
    //console.log(copia[num][id])
    copia[num][id] = event.target.value
    this.setState({
      personas: copia
    })

  }

  agregarPersona() {
    let aux = this.state.personas.slice()
    let num = aux.length
    let persona = {
      id: num,
      primerNombre: "",
      paterno: "",
      materno: "",
      genero: "",
      parentesco: "",
      plan: "",
      fechaNacimiento: ""
    }
    aux.push(persona)

    this.setState({
      ...this.state,
      personas: aux
    })
    console.log(this.state.personas)
  }

  render() {
    console.log(this.state)
    let estado = this.state.personas
    let handle = this.handleChange

    let aux = this.state.personas.map(function (item, i) {
      return (
        <div className="form" key={i}>
          <FormControl
            fullWidth
            margin='dense'
          >
            <TextField
              id={"primerNombre," + i}
              value={estado[i].primerNombre}
              onChange={handle}
              label="Primer Nombre"
            />
            <TextField
              id={"paterno," + i}
              value={estado[i].paterno}
              onChange={handle}
              label="Apellido Paterno"
            />
            <TextField
              id={"materno," + i}
              value={estado[i].materno}
              onChange={handle}
              label="Apellido Materno"
            />
          </FormControl>
          <div className="selects" >
            <FormControl>
              <InputLabel htmlFor="titulo">Genero</InputLabel>
              <Select
                id={"genero," + i}
                value={estado[i].genero}
                onChange={handle}
                displayEmpty={true}
                native
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
                id={"parentesco," + i}
                value={estado[i].parentesco}
                onChange={handle}
                displayEmpty={true}
                native
                required
              >
                <option value="" />
                <option value={"Titular"}>Titular</option>
                <option value={"Conyuge"}>Conyuge</option>
                <option value={"Hijo"}>Hijo</option>
              </Select>
            </FormControl>
          </div>
          <div className="selects" >
            <FormControl>
              <InputLabel htmlFor="titulo">Plan</InputLabel>
              <Select
                id="plan"
                displayEmpty={true}
                native
                required
              >
                <option value="" />
                <option value={1}>I</option>
                <option value={2}>II</option>
                <option value={3}>III</option>
                <option value={4}>IV</option>
              </Select>
            </FormControl>
          </div>
          <div className="selects" >
            <FormControl>
              <FormLabel component="legend">Fecha de Nacimiento</FormLabel>
              <TextField
                id={"fechaNacimiento," + i}
                value={estado[i].fechaNacimiento}
                onChange={handle}
                type="date"
                required
              />
            </FormControl>
          </div>
        </div>
      );
    })
    return (
      <div className= "tabulador" >
        {aux}
        <Button variant="outlined" color="primary" onClick={this.agregarPersona} >
          Agregar Extra
        </Button>
        <Card >
          <CardContent>
            <p>
              Prima por el periodo:
                {//this.state.textoSubGrupo[subgrupo].deducible
              }
            </p>
            <p>
              IVA:
                {//this.state.textoSubGrupo[subgrupo].sumaAsegurada
              }
            </p>
            <p>
              Prima anual:
                {//this.state.textoSubGrupo[subgrupo].sumaAsegurada
              }
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Tabulador;