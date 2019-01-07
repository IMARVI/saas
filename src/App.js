import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar'
import PolizaNueva from './containers/poliza-nueva/poliza-nueva'
import Home from './containers/home/home'
import Cotizador from './containers/cotizador/cotizador'
import NewUsr from './containers/new-usr/new-usr'
import ModPoliza from './containers/modificar-poliza/modificar-poliza'
import ReviewPoliza from './containers/review-poliza/review-poliza'
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Sáss Beneficios- Sáas";
  }
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <div className="info">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/new-policy" component={PolizaNueva} />
            <Route path="/quoting" component={Cotizador} />
            <Route path="/new-usr" component={NewUsr} />
            <Route path="/modify:id_poliza" component={ModPoliza} />
            <Route path="/review:id_poliza" component={ReviewPoliza} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
