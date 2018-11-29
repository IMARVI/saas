import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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
      </div>
    );
  }
}

export default Cotizador;