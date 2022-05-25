import {Children, useState} from 'react' 

import styles from './Rodape.module.css'
import Task from './Task'


const Rodape = () => {

const [task, setTask] = useState([]);

const addTask=()=>{
  setTask([...task,1]);
}
  return (
    <div className={styles.rodape}>
     <input type="text" />
     <button onClick={addTask} type="submit">Add task</button>
     <Task tarefas={task}/>
    </div>
  )
}

export default Rodape