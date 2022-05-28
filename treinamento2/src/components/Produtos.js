import React from 'react'

const Produtos = ({carros}) => {


  return (
    <div>
        <h1>Produto:</h1>
        
        {carros.map((el, i)=>(
              <li key={i}>Modelo: {el.modelo }  Valor: R${el.valor}</li>
        ))}
        
     


    </div>
  )
}

export default Produtos