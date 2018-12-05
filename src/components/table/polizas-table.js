import React, { Component } from 'react';
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import CloudDownload from '@material-ui/icons/CloudDownload';
import Comment from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import { connect } from 'react-redux'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class PolizasTable extends Component {

  state = {
    open: false,
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
                </div>
              );
            } else {
              return (
                <div>
                  <Button onClick={this.comentarios}><Comment /></Button>
                  <Button onClick={() => this.deleteUsr(tableMeta['rowIndex'])}><Delete /></Button>
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
          <DialogTitle id="alert-dialog-title">{"La póliza ha sido dada de baja"}</DialogTitle>

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
