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
    
  
      
      
      const verificarBtn =(e)=>{

         //#### VERIFICAR QUANTIDADE DE TAREFAS 
        // const quantidadeTarefas = document.querySelectorAll("#tarefa_container div")
        // const qtdTask = quantidadeTarefas.length           
        const getValor = document.querySelectorAll("#div_task select")

        const btnIniciar0 = "btnIniciar0"
        const btnIniciar1 = "btnIniciar1"
        const btnIniciar2 = "btnIniciar2"
        const btnIniciar3 = "btnIniciar3"
        const btnIniciar4 = "btnIniciar4"
        const btnIniciar5 = "btnIniciar5"
        
        const btnVerification = (e.target.id)
        
        
          switch (btnVerification){
                    
                    case (btnIniciar0): 
                                     
                      let valor = getValor[0]
                      let valSelect = valor.options[valor.selectedIndex].text
                      setTarefa0(valSelect)
                      
                      let valorEmp = getValor[1]
                      let valSelectEmp = valorEmp.options[valorEmp.selectedIndex].text
                      setEmpresa0(valSelectEmp)
                      console.log(empresa0)                        

                    break;
        
                    case (btnIniciar1):
                       //Set val task
                       let valor1 = getValor[2]
                       let valSelect1 = valor1.options[valor1.selectedIndex].text
                       setTarefa1(valSelect1)
                       console.log(tarefa1)
 
                       //Set val empresa
                       let valorEmp1 = getValor[3]
                       let valSelectEmp1 = valorEmp1.options[valorEmp1.selectedIndex].text
                       setEmpresa1(valSelectEmp1)
                       console.log(empresa1)   
                    break;
        
                    case (btnIniciar2):
                        //Set val task
                      let valor2 = getValor[4]
                      let valSelect2 = valor2.options[valor2.selectedIndex].text
                      setTarefa2(valSelect2)
                      console.log(tarefa2)

                      //Set val empresa
                      let valorEmp2 = getValor[5]
                      let valSelectEmp2 = valorEmp2.options[valorEmp2.selectedIndex].text
                      setEmpresa2(valSelectEmp2)
                      console.log(empresa2)   
                    break;
        
                    case (btnIniciar3):
                        //Set val task
                      let valor3 = getValor[6]
                      let valSelect3 = valor3.options[valor3.selectedIndex].text
                      setTarefa3(valSelect3)
                      console.log(tarefa3)

                      //Set val empresa
                      let valorEmp3 = getValor[7]
                      let valSelectEmp3 = valorEmp3.options[valorEmp3.selectedIndex].text
                      setEmpresa3(valSelectEmp3)
                      console.log(empresa3)   
                    break;
        
                    case (btnIniciar4):
                       //Set val task
                       let valor4 = getValor[8]
                       let valSelect4 = valor4.options[valor4.selectedIndex].text
                       setTarefa4(valSelect4)
                       console.log(tarefa4)
 
                       //Set val empresa
                       let valorEmp4 = getValor[9]
                       let valSelectEmp4 = valorEmp4.options[valorEmp4.selectedIndex].text
                       setEmpresa4(valSelectEmp4)
                       console.log(empresa4)   
                    break;
        
                    case (btnIniciar5):
                       //Set val task
                       let valor5 = getValor[10]
                       let valSelect5 = valor5.options[valor5.selectedIndex].text
                       setTarefa5(valSelect5)
                       console.log(tarefa5)
 
                       //Set val empresa
                       let valorEmp5 = getValor[11]
                       let valSelectEmp5 = valorEmp5.options[valorEmp5.selectedIndex].text
                       setEmpresa5(valSelectEmp5)
                       console.log(empresa5)   
                    break;
                    default:
                      console.log("Case não funcionou")
        }
        console.log(tarefa0)
    }
    // }
      // const selectTarefa = document.querySelector("#tarefa")
      // let valor = selectTarefa.options[selectTarefa.selectedIndex].text
      // setTarefa0(valor)
      // console.log(tarefa0)
      
      //###########################################################################
            
      //Codigo importante - pega todos os selects
      //const getValor = document.querySelectorAll("#div_task select")

      // getValor.forEach(function(el,i){
        
      //   let valor = []
      //   let valArray = el.options[el.selectedIndex].text
      //   let valor1 = [...valor,valArray]
      //   console.log("------------------------------------------")
      //   console.log("a["+i+"]"+valArray)
      //   console.log(valor1)
      //   console.log("------------------------------------------")
        
    
        //###########################################################################
        
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
                // default:
                //   console.log("")

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

                        <button id={"btnIniciar" + index} className={styles.btnIniciar} onClick={verificarBtn}>Iniciar</button>
                        <button id={"btnParar" + index} className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                        <button id={"btnGravar" + index} className={styles.btnGravar} onClick={handleBtnGravar} type="submit">Gravar</button>
                        
                        
              </div>
          );
      })}
    </div>
  );
}
export default Task