import { useState } from "react"
import styles from './Task.module.css'

const Task = (props) => {
  const {tarefas} = props;
  
  //Botoes
  const [btnIniciar, setBtnIniciar] = useState(true);
  const [btnParar, setBtnParar] = useState(true);
  const [btnGravar, setBtnGravar] = useState(true);
  
  //Dados tarefas
    const [tarefa0,setTarefa0] = useState()
    const [tarefa1,setTarefa1] = useState()
    const [tarefa2,setTarefa2] = useState()
    const [tarefa3,setTarefa3] = useState()
    const [tarefa4,setTarefa4] = useState()
    const [tarefa5,setTarefa5] = useState()
    
    const [empresa0, setEmpresa0] = useState()
    const [empresa1, setEmpresa1] = useState()
    const [empresa2, setEmpresa2] = useState()
    const [empresa3, setEmpresa3] = useState()
    const [empresa4, setEmpresa4] = useState()
    const [empresa5, setEmpresa5] = useState()

    const [comentario0, setComentario0] = useState()
    const [comentario1, setComentario1] = useState()
    const [comentario2, setComentario2] = useState()
    const [comentario3, setComentario3] = useState()
    const [comentario4, setComentario4] = useState()
    const [comentario5, setComentario5] = useState()
    
    //filhos de tarefa_container
    
    // const tarefa00 = document.querySelector("")

    
  

    // const handleEmpresa =(e)=>{
    //     // e.presentDefault();
    //     setEmpresa0(e.target[0].value)
    //     console.log(empresa0)
    // }

    // const handleComentario =(e)=>{
    //     // e.presentDefault();
    //     setComentario0(e.target.value)
    //     console.log(comentario0)
    // }

    // const res =()=>{
       
    //     console.log("Tarefa finalizada!")
    // }
   
    const handleBtnIniciar =()=>{
      
      // const selectTarefa = document.querySelector("#tarefa")
      // let valor = selectTarefa.options[selectTarefa.selectedIndex].text
      // setTarefa0(valor)
      // console.log(tarefa0)
      
      const getValor = document.querySelectorAll("#div_task select")
      getValor.forEach(function(el,i){
        
        let valor = []
        let valArray = el.options[el.selectedIndex].text
        let valor1 = [...valor,valArray]
        console.log("------------------------------------------")
        console.log("a["+i+"]"+valArray)
        console.log(valor1)
        console.log("------------------------------------------")
        

      })
      // const select1 = document.querySelector("#tarefa[1]")
      // let valor1 = select.options[select.selectedIndex].text
      // setTarefa1(valor1)
      // console.log(tarefa1)
      
      // setBtnIniciar(!btnIniciar)
        // console.log("Iniciou?",btnIniciar)
        // console.log("Parou?",btnParar)
        // console.log("Gravou?",btnGravar)

        
        // const handleTarefa =()=>{
        //     // e.presentDefault();
            
        // const tarefasAll = document.querySelector("#tarefa")
        

  
        // const retornoValTask = tarefa.forEach(function(el,i){
        //    let value = tarefa[i]   
        //    let select = value.options[value.selectedIndex].text 
        //    setTarefa0(select) 
        //    console.log(tarefa0)
        // })

        // function valtask =()

        // let tarefa00 = tarefasAll[0].value
        // let tarefa01 = tarefasAll[1].value
        // let tarefa02 = tarefasAll[2].value
        // let tarefa03 = tarefasAll[3].value
        // let tarefa04 = tarefasAll[4].value
        // let tarefa05 = tarefasAll[5].value
    
        //     const tarefasIn0 = tarefasAll[0].selectedIndex
        //     const tarefasIn1 = tarefasAll[1].selectedIndex
        //     const tarefasIn2 = tarefasAll[2].selectedIndex
        //     const tarefasIn3 = tarefasAll[3].selectedIndex
        //     const tarefasIn4 = tarefasAll[4].selectedIndex
        //     const tarefasIn5 = tarefasAll[5].selectedIndex
            
            // setTarefa0(tarefasIn0)
            // setTarefa1(tarefasIn1)
            // setTarefa2(tarefasIn2)
            // setTarefa3(tarefasIn3)
            // setTarefa4(tarefasIn4)
            // setTarefa5(tarefasIn5)
            
            // console.log(tarefa0)
            // console.log(tarefa1)
            // console.log(tarefa2)
            // console.log(tarefa3)
            // console.log(tarefa4)
            // console.log(tarefa5)
     }
    

        
    //     switch (btnIniciar){
    //         case btnIniciar[0]:
    //             setBtnIniciar();
    //         break;

    //         case btnIniciar[1]:
    //         break;

    //         case btnIniciar[2]:
    //         break;

    //         case btnIniciar[3]:
    //         break;

    //         case btnIniciar[4]:
    //         break;

    //         case btnIniciar[5]:
    //         break;

    //     }
    //     

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
    <div id='tarefa_container'  className={styles.container_task}>        
      {tarefas.map((task, index) => {
          return (            
              <div id="div_task" key={index}  className={styles.task}>     
                  <span>Escolha a tarefa:</span>
                          <select className={styles.tarefa} name="Tarefa" id="tarefa" >
                                <option value="tarefa1">Tarefa1</option>
                                <option value="tarefa2">Tarefa2</option>
                                <option value="tarefa3">Tarefa3</option>
                                <option value="tarefa4">Tarefa4</option>
                                <option value="tarefa5">Tarefa5</option>
                                <option value="tarefa6">Tarefa6</option>
                          </select>
                        <span>Selecione a empresa:</span>
                        <select className={styles.empresa} name="Empresas" id="empresa" >
                            <option value="empresa1">Empresa1</option>
                            <option value="empresa2">Empresa2</option>
                            <option value="empresa3">Empresa3</option>
                            <option value="empresa4">Empresa4</option>
                            <option value="empresa5">Empresa5</option>
                            <option value="empresa6">Empresa6</option>
                        </select>
                        <span>Comentario:</span>
                        <textarea className={styles.comentario} name="comentario" id="comentario" cols="17" rows="2" ></textarea>

                        <button id="btnIniciar" className={styles.btnIniciar} onClick={handleBtnIniciar}>Iniciar</button>
                        <button id="btnParar"  className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                        <button id="btnGravar" className={styles.btnGravar} onClick={handleBtnGravar} type="submit">Gravar</button>
                        
              </div>
          );
      })}
    </div>
  );
}
export default Task