import { useState } from "react"
import styles from './Task.module.css'

const Task = (props) => {
    const {tarefas} = props;
    
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

    const res =()=>{
        setNomeTarefa(nomeEmpresa)
        console.log("Tarefa finalizada!")
    }

  return (
    <div  className={styles.container_task}>
      {tarefas.map(task => {
          return (            
              <div className={styles.task}>                  
                  <h1>Tarefa</h1>
                  <span>Escolha a tarefa:</span>
                          <input type="text" onChange={handleTarefa}/>
                        
                        <span>Comentario:</span>
                        <textarea  name="comentario" onChange={(e)=>setComentario(e.target.value)} value={comentario}></textarea >

                        <span>Selecione a empresa:</span>
                        <select name="Empresas" id="empresas" onChange={handleEmpresa}>
                            <option value="empresa1">Empresa1</option>
                            <option value="empresa2">Empresa2</option>
                            <option value="empresa3">Empresa3</option>
                            <option value="empresa4">Empresa4</option>
                            <option value="empresa5">Empresa5</option>
                            <option value="empresa6">Empresa6</option>
                        </select>

                        <button  onClick={res} type="submit">Finalizar tarefa</button>

              </div>
          );
      })}
    </div>
  );
}
export default Task