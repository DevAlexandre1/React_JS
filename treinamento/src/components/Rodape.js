import {Children, useState} from 'react' 

import styles from './Rodape.module.css'
import Task from './Task'


const Rodape = () => {

const [task, setTask] = useState([
  {id:1,usuario:"", data: "", tarefa:"", empresa:"", comentario:""}]);

const addTask=()=>{
  // const {usuario, data, tarefa, empresa, comentario} = tarefasprops
  setTask([...task,{usuario:"", data: "", tarefa:"", empresa:"", comentario:""}]);
}




  return (
    <div className={styles.rodape}>
     <input type="text" />
     <button onClick={addTask} type="submit">Add task</button>     
     {<Task tarefas={task}/> }
    </div>
  )
}

export default Rodape