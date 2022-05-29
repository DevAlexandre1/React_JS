import {Children, useState} from 'react' 

import styles from './Rodape.module.css'
import Task from './Task'


const Rodape = () => {

const [task, setTask] = useState([
  {}]);

const addTask=()=>{  
  task.length > 5 ? alert("Numero maximo de tarefas atingido!") : setTask([...task,{}]);
}


  return (
    <div  className={styles.rodape}>
     <input type="text" />
     <button onClick={addTask} type="submit">Add task</button>     
        {<Task tarefas={task}/> }
    </div>
  )
}

export default Rodape