import { useState } from "react"
import styles from './Task.module.css'

const Task = (props) => {
    const {tarefas} = props;
    
    const [nomeTarefa, setNomeTarefa] = useState("")
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [comentario, setComentario] = useState("");
    const [btnIniciar, setBtnIniciar] = useState(true);
    const [btnParar, setBtnParar] = useState(true);
    const [btnGravar, setBtnGravar] = useState(true);
    
    
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

    const handleBtnIniciar =()=>{
        setBtnIniciar(!btnIniciar)
      
             
        console.log("Iniciou?",btnIniciar)
        console.log("Parou?",btnParar)
        console.log("Gravou?",btnGravar)
    }

    const handleBtnParar =()=>{
        setBtnParar(!btnParar)
        
        console.log("Iniciou?",btnIniciar)
        console.log("Parou?",btnParar)
        console.log("Gravou?",btnGravar)
    }
    const handleBtnGravar =()=>{
        setBtnGravar(!btnGravar)
        
        console.log("Iniciou?",btnIniciar)
        console.log("Parou?",btnParar)
        console.log("Gravou?",btnGravar)
    }
  return (
    <div  className={styles.container_task}>
      {tarefas.map(task => {
          return (            
              <div className={styles.task}>                  
                  
                  <span>Escolha a tarefa:</span>
                          
                          <select name="Tarefa" id="tarefa" onChange={handleTarefa}>
                                <option value="tarefa1">Tarefa1</option>
                                <option value="tarefa2">Tarefa2</option>
                                <option value="tarefa3">Tarefa3</option>
                                <option value="tarefa4">Tarefa4</option>
                                <option value="tarefa5">Tarefa5</option>
                                <option value="tarefa6">Tarefa6</option>
                          </select>
                        <span>Selecione a empresa:</span>
                        <select name="Empresas" id="empresas" onChange={handleEmpresa}>
                            <option value="empresa1">Empresa1</option>
                            <option value="empresa2">Empresa2</option>
                            <option value="empresa3">Empresa3</option>
                            <option value="empresa4">Empresa4</option>
                            <option value="empresa5">Empresa5</option>
                            <option value="empresa6">Empresa6</option>
                        </select>
                        <span>Comentario:</span>
                        <textarea  name="comentario" onChange={(e)=>setComentario(e.target.value)} value={comentario}></textarea >

                        <button className={styles.btnIniciar} onClick={handleBtnIniciar}>Iniciar</button>
                        <button className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                        <button className={styles.btnGravar} onClick={handleBtnGravar} type="submit">Gravar</button>
                        

              </div>
          );
      })}
    </div>
  );
}
export default Task