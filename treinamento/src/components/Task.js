import { useState } from "react"

    


const Task = () => {
    // const userName = "Alexandre";
    const [nomeTarefa, setNomeTarefa] = useState("")
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [comentario, setComentario] = useState("");
    
    const handleTarefa =(e)=>{
        e.presentDefault();
        setNomeTarefa(e.target.value)
    }

    const handleEmpresa =(e)=>{
        e.presentDefault();
        setNomeEmpresa(e.target.value)
    }

  return (
    <div>
        <h1>Tarefa</h1>
        <label>
            <span>Escolha a tarefa:</span>
            <input type="text" onChange={handleTarefa}/>
        </label>
        
        <label>
            <span>Comentario:</span>
            <textarea  name="comentario" onChange={(e)=>setComentario(e.target.value)} value={comentario}></textarea >
        </label>
        <label>
            <span>Selecione a empresa:</span>
            <select name="Empresas" id="empresas" onChange={handleEmpresa}>
                <option value="empresa1">Empresa1</option>
                <option value="empresa2">Empresa2</option>
                <option value="empresa3">Empresa3</option>
                <option value="empresa4">Empresa4</option>
                <option value="empresa5">Empresa5</option>
                <option value="empresa6">Empresa6</option>
            </select>
        </label>

    </div>
  )
}

export default Task