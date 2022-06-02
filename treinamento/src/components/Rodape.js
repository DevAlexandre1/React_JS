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
      <div className={styles.btn_add_div}>
          <button className={styles.btn_addTask} onClick={addTask} type="submit">Add task</button>     
          <button className={styles.btn_addTask} onClick={addTask} type="submit">Start All</button>    
          <button className={styles.btn_addTask} onClick={addTask} type="submit">Stop All</button>    
      </div>
      <div>
        {<Task tarefas={task}/> }
      </div>

    </div>
  )
}

export default Rodape