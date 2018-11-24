import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PolizaForm from '../../components/poliza-form/poliza-form'

class PolizaNueva extends Component {
  constructor() {
    super();
    this.state = {
      rfc: '',
      password: '',
      redirectTo: null,
    };
  }

  handleSubmit(){
      
  }

  render() {
    return (
      <div>
          <PolizaForm></PolizaForm>
      </div>
    );
  }
}

export default PolizaNueva;