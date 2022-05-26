import React from 'react'

const Produtos = (garagem) => {
  return (
    <div>
        <h1>Produto: {garagem.modelo}</h1>
        <h1>Valor: R${garagem.valor}</h1>
     


    </div>
  )
}

export default Produtos