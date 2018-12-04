import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import CloudDownload from '@material-ui/icons/CloudDownload';
import Comment from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'




class PolizasTable extends Component {
  download() {
    console.log("Descargando poliza")
  }

  comentarios(){
    console.log("Comentarios sobre poliza")
  }
  render() {
    const columns = [
      {
      name: "Nombre",
      options: {
        filter: true,
      }
    },
    {
      name: "Tipo Poliza",
      options: {
        filter: true,
      }
    },
    {
      name: "Estatus",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          if(value===1){
            return (
              <div>Aprobado</div>
            );
          }else{
            return (
              <div>Pendiente</div>
            );
          }
        },
      }
    },
    {
    name:"",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        if(value[0]===1){
          return (
            <Button onClick={this.download} href={value[1]} target="_blank" ><CloudDownload/></Button>
          );
        }else{
          return (
            <Button onClick={this.comentarios}><Comment/></Button>
          );
        }
      },
    }
    },

    ];

    const data = [
      ["Gabby George", "Seguro de vida", 1,1],
      ["Isaias Martinez", "Seguro de vida", 0,0],
      ["Alfonso Ledezma", "Gastos Medicos", 1,1],
      ["Arturo Garcia", "Seguro de vida", 0,0],
      ["Luicia Villareal", "Seguro de vida", 0,0],
      ["Alicia Martinez", "Seguro de vida", 1,0],
      ["Luis Torres", "Gastos Medicos", 1,0],
      ["Angel Lucatero", "Seguro de vida", 0,1],
      ["Arturo Garcia", "Seguro de vida", 0,0],
      ["Luicia Villareal", "Seguro de vida", 0,0],
      ["Alicia Martinez", "Seguro de vida", 1,0],
      ["Luis Torres", "Gastos Medicos", 1,0],
      ["Angel Lucatero", "Seguro de vida", 0,1],
    ];

    const options = {
      responsive: "scroll",
      selectableRows: false,
      print: false,
      download: false
    };
    return (
      <MUIDataTable
        data={this.props.usuarios}
        columns={columns}
        options={options}
      />
    );
  }
}

//Con este metodo mandamos a llamar los valores que hay en redux
const mapStateToProps = state => {
  return {
    usuarios: state.usuarios,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsuarios: (users) => dispatch({ type: 'SET_USUARIOS', usuariosTodos: users }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PolizasTable);
