import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import CloudDownload from '@material-ui/icons/CloudDownload';
import Comment from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import RateReview from '@material-ui/icons/RateReview';
import Edit from '@material-ui/icons/Edit';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';



class PolizasTable extends Component {

  state = {
    open: false,
    redirectTo: null,
    id_poliza: 0
  };

  handleClickOpen = (usr) => {
    this.deleteUsr(usr)
    this.setState({ open: true });
  };

  handleClose = () => {

    this.setState({ open: false });
  };

  download() {
    console.log("Descargando poliza")
  }

  comentarios() {
    console.log("Comentarios sobre poliza")
  }

  deleteUsr(usr) {
    this.props.deleteUsuario(usr)
  }

  editUsr(usr) {    
    //Asignamos el id_poliza al estado y lo enviamos como param a modificar poliza
    //Ahi se hara un get de los datos
    console.log(usr)

    this.setState({
      id_poliza:100,
      redirectTo: '/modify'
    })
  }

  reviewPoliza(usr){
    //Asignamos el id_poliza al estado y lo enviamos como param a modificar poliza
    //Ahi se hara un get de los datos
    console.log(usr)

    this.setState({
      id_poliza:100,
      redirectTo: '/review'
    })
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
            if (value === 1) {
              return (
                <div>Aprobado</div>
              );
            } else {
              return (
                <div>Pendiente</div>
              );
            }
          },
        }
      },
      {
        name: "",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            if (value[0] === 1) {
              return (
                <div>
                  <Button onClick={this.download} href={value[1]} target="_blank" ><CloudDownload /></Button>
                  <Button onClick={() => this.handleClickOpen(tableMeta['rowIndex'])}><Delete /></Button>
                  <Button onClick={() => this.editUsr(tableMeta['rowIndex'])}><Edit /></Button>
                </div>
              );
            } else {
              return (
                <div>
                  <Button onClick={() => this.reviewPoliza(tableMeta['rowIndex'])}><RateReview /></Button>
                  <Button onClick={() => this.deleteUsr(tableMeta['rowIndex'])}><Delete /></Button>
                  <Button onClick={() => this.editUsr(tableMeta['rowIndex'])}><Edit /></Button>
                </div>
              );
            }
          },
        }
      },

    ];
    const options = {
      responsive: "scroll",
      selectableRows: false,
      print: false,
      download: false
    };
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo+ this.state.id_poliza }} />;
    } else {
      return (
        <div>
          <MUIDataTable
            data={this.props.usuarios}
            columns={columns}
            options={options}
          />
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Se ha realizado solicitud de baja"}</DialogTitle>

            <DialogActions>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Ok
            </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
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
    deleteUsuario: (usuario) => dispatch({ type: 'DELETE_USR', usuario: usuario })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PolizasTable);
