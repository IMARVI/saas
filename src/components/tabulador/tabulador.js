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
      globalPrima: 0,
      globalIva: 0,
      globalPrimaAnual:0,
      plan: "",
      diasCobertura: "",
      personas: [
        {
          id: 0,
          primerNombre: "",
          paterno: "",
          materno: "",
          genero: "",
          parentesco: "",
          plan: "",
          fechaNacimiento: "",
          edad: null,
          primaPeriodo: null,
          iva: null,
          primaAnual: null
        }
      ],
      tablaEdad: [
        {
          19: {
            hombre: 1444.66,
            mujer: 1444.66
          },
          24: {
            hombre: 2039.93,
            mujer: 2946.18
          },
          29: {
            hombre: 2075.9,
            mujer: 3425.41
          },
          34: {
            hombre: 2167.57,
            mujer: 3881.44
          },
          39: {
            hombre: 2347.43,
            mujer: 4294.53
          },
          44: {
            hombre: 2638.68,
            mujer: 4664.68
          },
          49: {
            hombre: 3360.43,
            mujer: 5400.36
          },
          54: {
            hombre: 4364.15,
            mujer: 6315.89
          },
          59: {
            hombre: 5746.15,
            mujer: 7130.47
          },
          64: {
            hombre: 7738.5,
            mujer: 7738.5
          }
        },
        {
          19: {
            hombre: 1651.04,
            mujer: 1651.04
          },
          24: {
            hombre: 2331.35,
            mujer: 3367.06
          },
          29: {
            hombre: 2372.46,
            mujer: 3914.75
          },
          34: {
            hombre: 2477.22,
            mujer: 4435.93
          },
          39: {
            hombre: 2682.77,
            mujer: 4908.03
          },
          44: {
            hombre: 3015.63,
            mujer: 5331.07
          },
          49: {
            hombre: 3840.49,
            mujer: 6171.84
          },
          54: {
            hombre: 4987.6,
            mujer: 7218.16
          },
          59: {
            hombre: 6567.03,
            mujer: 8149.11
          },
          64: {
            hombre: 8844,
            mujer: 8844
          }
        },
        {
          19: {
            hombre: 1568.66,
            mujer: 1568.66
          },
          24: {
            hombre: 2215.02,
            mujer: 3199.06
          },
          29: {
            hombre: 2254.08,
            mujer: 3719.42
          },
          34: {
            hombre: 2353.62,
            mujer: 4214.59
          },
          39: {
            hombre: 2548.91,
            mujer: 4663.14
          },
          44: {
            hombre: 2865.16,
            mujer: 5065.07
          },
          49: {
            hombre: 3648.86,
            mujer: 5863.88
          },
          54: {
            hombre: 4738.73,
            mujer: 6858
          },
          59: {
            hombre: 6239.35,
            mujer: 7742.49
          },
          64: {
            hombre: 8402.72,
            mujer: 8402.72
          }
        },
        {
          19: {
            hombre: 2015.59,
            mujer: 2015.59
          },
          24: {
            hombre: 2846.11,
            mujer: 4110.51
          },
          29: {
            hombre: 2896.3,
            mujer: 4779.14
          },
          34: {
            hombre: 3024.2,
            mujer: 5415.39
          },
          39: {
            hombre: 3275.13,
            mujer: 5991.73
          },
          44: {
            hombre: 3681.49,
            mujer: 6508.18
          },
          49: {
            hombre: 4688.48,
            mujer: 7534.59
          },
          54: {
            hombre: 6088.87,
            mujer: 8811.94
          },
          59: {
            hombre: 8017.04,
            mujer: 9948.44
          },
          64: {
            hombre: 10796.77,
            mujer: 10796.77
          }
        }
      ]
    };

    this.agregarPersona = this.agregarPersona.bind(this);
    this.eliminarPersona = this.eliminarPersona.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Metodo para hacer el double binding
  handleChange(event) {
    let aux = event.target.id.split(',')
    let id = aux[0]
    let num = aux[1]
    let copia = JSON.parse(JSON.stringify(this.state.personas))
    copia[num][id] = event.target.value

    if(id === "plan"){
      copia[num][id] = event.target.value
      this.setState({
        plan: event.target.value,
        personas: copia
      })
    }
    if(id === "fechaNacimiento"){
      //Calculamos la edad nueva
      let edad = this.calcularEdad(event.target.value)
      copia[num]['edad'] = edad
    }
    
    this.setState({
      personas: copia
    })
    let patt = /^\d{4}[-](0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])$/i
    let result = patt.test(copia[num]['fechaNacimiento'])
    console.log(copia[num]['fechaNacimiento'])
    console.log(result)

    if(copia[num]['edad']!== null && copia[num]['genero']!== "" && copia[num]['plan']!== "" && result){

      let edad = copia[num]['edad']
      
      let genero = copia[num]['genero']
      let plan = this.state.plan
      let rangoEdad = 0

      if(edad<20){
        rangoEdad = 19
      }
      else if(edad<25){
        rangoEdad = 24
      }
      else if(edad<30){
        rangoEdad = 29
      }
      else if(edad<35){
        rangoEdad = 34
      }
      else if(edad<40){
        rangoEdad = 39
      }
      else if(edad<45){
        rangoEdad = 44
      }
      else if(edad<50){
        rangoEdad = 49
      }
      else if(edad<55){
        rangoEdad = 54
      }
      else if(edad<60){
        rangoEdad = 59
      }
      else if(edad<65){
        rangoEdad = 64
      }
      try{
        let prima = this.state.tablaEdad[plan-1][rangoEdad][genero]
        let primaAno = prima/365
        let diasCobertura = this.calculoFechas()
        let primaDias = primaAno * (diasCobertura[2]-1)
        
        copia[num]['primaPeriodo'] = primaDias.toFixed(2)
        copia[num]['iva'] = (primaDias * 0.16).toFixed(2)
        copia[num]['primaAnual'] = (primaDias * 1.16).toFixed(2)

        this.setState({
          personas: copia
        }, () => {
          this.calcularTotales()
         })

      }catch(e){
        console.log("Error: ",e)
      }
      
    }
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
      fechaNacimiento: "",
      edad: null,
      primaPeriodo: null,
      iva: null,
      primaAnual: null
    }
    aux.push(persona)
    this.setState({
      ...this.state,
      personas: aux
    })
  }

  eliminarPersona() {
    let aux = this.state.personas.slice()
    let num = aux.length
    if (num > 1) {
      aux.pop()
      this.setState({
        ...this.state,
        personas: aux
      })
    }
  }

  calcularEdad(fechaN) {
    let fecha = new Date();
    let fechaNacimiento = new Date(fechaN)
    let utc1 = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    let utc2 = Date.UTC(fechaNacimiento.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    let dias = Math.floor((utc1-utc2) / (1000 * 60 * 60 * 24));
    let edad = Math.floor(dias/365)
    return edad;
  }

  calculoFechas() {
    let fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let fechaCompleta = dia + "-" + mes + "-" + año
    let finVigencia = "28-12-" + año
    let finFecha = new Date(año + '-12-29')
    let utc1 = Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    let utc2 = Date.UTC(finFecha.getFullYear(), finFecha.getMonth(), finFecha.getDate());
    let diasCobertura = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    return [fechaCompleta, finVigencia, diasCobertura]
  }

  calcularTotales(nuevo){
    console.log("dentro costos")
    let primaPeriodo = 0
    let sumaAsegurada = 0
    let iva = 0
    let primaAnual = 0
    let deducible = 0
    console.log(this.state.personas)
    for(var p in this.state.personas){
      let c = this.state.personas[p]
      primaPeriodo+= c.primaPeriodo
      iva += c.iva
      primaAnual += c.primaAnual
    }
    this.setState({
      globalIva: iva,
      globalPrima: primaPeriodo,
      globalPrimaAnual: primaAnual
    })
    
  }

  render() {
    console.log(this.state)
    const estado = this.state.personas
    const plan = this.state.plan
    const handle = this.handleChange
    const datosFechas = this.calculoFechas()
    const fechaCompleta = datosFechas[0]
    const finVigencia = datosFechas[1]
    const diasCobertura = datosFechas[2]


    let aux = this.state.personas.map(function (item, i) {
      return (
        <div className="form" key={i}>
          <FormControl
            margin='dense'
            className='nombresTabulador'
          >
            <TextField
              id={"primerNombre," + i}
              value={estado[i].primerNombre}
              onChange={handle}
              label="Primer Nombre"
            />
          </FormControl>
          <FormControl
            margin='dense'
            className='nombresTabulador'
          >
            <TextField
              id={"paterno," + i}
              value={estado[i].paterno}
              onChange={handle}
              label="Apellido Paterno"
            />
          </FormControl>
          <FormControl
            margin='dense'
            className='nombresTabulador'
          >
            <TextField
              id={"materno," + i}
              value={estado[i].materno}
              onChange={handle}
              label="Apellido Materno"
            />
          </FormControl>
          <div className="selectsTabulador" >
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
                <option value={"hombre"}>Hombre</option>
                <option value={"mujer"}>Mujer</option>
              </Select>
            </FormControl>
          </div>
          <div className="selectsTabulador" >
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
          <div className="selectsTabulador" >
            <FormControl>
              <InputLabel htmlFor="titulo">Plan</InputLabel>
              <Select
                id={"plan,"+i}
                value={plan}
                onChange={handle}
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
          <div className="selectsTabulador" >
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
          <Card className="contenedorTarjeta" >
            <CardContent
              className="tarjeta"
            >
              <h4>Sub Total</h4>
              <p>
                Prima por el periodo: $
                {estado[i].primaPeriodo}
              </p>
              <p>
                IVA: $
                {estado[i].iva}                
              </p>
              <p>
                Prima anual: $
                {estado[i].primaAnual}
              </p>
            </CardContent>
          </Card>
        </div>
      );
    })

    return (
      <div className="tabulador" >
        {aux}
        <Button variant="outlined" color="primary" onClick={this.agregarPersona} >
          Agregar Extra
        </Button>
        <Button variant="outlined" color="secondary" onClick={this.eliminarPersona} >
          Elimnar Extra
        </Button>
        <Card className="contenedorTarjeta">
          <CardContent>
            <h3>Total:</h3>
            <div className="datosTotales">
              Prima por el periodo: $
              {" "+ this.state.globalPrima}
            </div>
            <div className="datosTotales">
              Prima anual: $
              {" "+ this.state.globalPrimaAnual}
            </div>
            <div className="datosTotales">
              Suma Asegurada: $
                {//this.state.textoSubGrupo[subgrupo].deducible
              }
            </div>
            <div className="datosTotales">
              Deducible: $
              {" "}
            </div>
            <div className="datosTotales">
              IVA: $
                {" "+ this.state.globalIva}
            </div>
            <div className="datosTotales">
              Fin the Vigencia:
                {" " + finVigencia}
            </div>
            <div className="datosTotales">
              Fecha de el calculo:
                {" " + fechaCompleta}
            </div>

            <div className="datosTotales">
              Dias de Cobertura:
                {" " + diasCobertura}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}


export default Tabulador;