import { useState, useEffect } from "react"
const Task = () => {

  const [cont, setCont] = useState(0)

useEffect(()=>{

  document.title = cont<=5 ?  "Valor menor que 5" : "Valor maior que 5" 

},[cont])



  return (
    <div>
      <h1>contador </h1>
      <h1>{cont}</h1>
      <button onClick={()=>setCont(cont +1)}>CLICAR</button>
    </div>
  )
}

export default Task