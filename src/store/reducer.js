const initialSate = {
    usuarios : [
      ["Henrry Ortega", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/uno.pdf"]],
      ["Ana Victoria Morales", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/dos.pdf"]],
      ["Jonathan Alberto Castor", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/tres.pdf"]],
      ["Alberto Antonio Rojas", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/cuatro.pdf"]],
      ["Liliana Rico", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/cinco.pdf"]]
    ]
  }
  
  const reducer = (state = initialSate, action) =>{
    if(action.type === 'SET_USR'){
      let aux = state.usuarios.slice()
      console.log(aux)
      aux.push(action.users)
      console.log(aux)
      return{
        ...state,
        usuarios : aux
      }
    }

    if(action.type === 'DELETE_USR'){
      console.log(action.usuario)
      let aux = state.usuarios.slice()
      console.log(aux)
      aux.splice(action.usuario,1)
      console.log(aux)
      return{
        ...state,
        usuarios : aux
      }
    }

    return state
  }
  
export default reducer;