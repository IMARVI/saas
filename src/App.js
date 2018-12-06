import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar'
import PolizaNueva from './containers/poliza-nueva/poliza-nueva'
import Home from './containers/home/home'
import Cotizador from './containers/cotizador/cotizador'
import NewUsr from './containers/new-usr/new-usr'
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Sáss Beneficios";
  }
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <div className="info">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/poliza-nueva" component={PolizaNueva} />
            <Route path="/cotizador" component={Cotizador} />
            <Route path="/agregarUsr" component={NewUsr} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
