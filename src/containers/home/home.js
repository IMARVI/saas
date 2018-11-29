import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PolizasTable from '../../components/table/polizas-table'
import './home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className= "home">
          <PolizasTable></PolizasTable>
      </div>
    );
  }
}

export default Home;