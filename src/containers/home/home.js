import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PolizasTable from '../../components/table/polizas-table'

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleSubmit(){
      
  }

  render() {
    return (
      <div>
          <PolizasTable></PolizasTable>
      </div>
    );
  }
}

export default Home;