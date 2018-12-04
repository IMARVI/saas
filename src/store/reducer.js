const initialSate = {
    usuarios : [
      ["Maria Antonieta", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/uno.pdf"]],
      ["Isaias Martinez", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/dos.pdf"]],
      ["Alfonso Ledezma", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/tres.pdf"]],
      ["Arturo Garcia", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/cuatro.pdf"]],
      ["Luicia Villareal", "Gastos Medicos", 1,[1,"https://s3.amazonaws.com/saas-polizas/cinco.pdf"]]
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

    return state
  }
  
export default reducer;