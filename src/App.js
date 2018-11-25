import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar'
import PolizaNueva from './containers/poliza-nueva/poliza-nueva'
import Home from './containers/home/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <div className="info">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/poliza-nueva" component={PolizaNueva} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
