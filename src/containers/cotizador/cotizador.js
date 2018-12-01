import React, { Component } from "react";
import Tabulador from '../../components/tabulador/tabulador'
import './cotizador.css'

class Cotizador extends Component {
  constructor() {
    super();
    this.state = {
      rfc: '',
      password: '',
      redirectTo: null,
    };
  }


  render() {
    return (
      <div className= "cotizador">
      <Tabulador></Tabulador>
      </div>
    );
  }
}

export default Cotizador;