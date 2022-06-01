import { useState} from "react"
import styles from './Task.module.css'
import Cronometro from './Cronometro'


const Task = (props) => {
  const {tarefas} = props;
  
    //BOTOES
  const [btnIniciar, setBtnIniciar] = useState(true);
  const [btnParar, setBtnParar] = useState(true);
  const [btnGravar, setBtnGravar] = useState(true);
  
    //DADOS TAREFAS
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

      //DATA TIME TAREFAS
    const [data, setData]= useState()

   
    const [horaInicial0, setHoraInicial0] = useState()
    const [horaInicial1, setHoraInicial1] = useState()
    const [horaInicial2, setHoraInicial2] = useState()
    const [horaInicial3, setHoraInicial3] = useState()
    const [horaInicial4, setHoraInicial4] = useState()
    const [horaInicial5, setHoraInicial5] = useState()
    
    const [horaFinal0, setHoraFinal0] = useState()
    const [horaFinal1, setHoraFinal1] = useState()
    const [horaFinal2, setHoraFinal2] = useState()
    const [horaFinal3, setHoraFinal3] = useState()
    const [horaFinal4, setHoraFinal4] = useState()
    const [horaFinal5, setHoraFinal5] = useState()

    const [timeTarefa0, setTimeTarefa0] = useState()
    const [timeTarefa1, setTimeTarefa1] = useState()
    const [timeTarefa2, setTimeTarefa2] = useState()
    const [timeTarefa3, setTimeTarefa3] = useState()
    const [timeTarefa4, setTimeTarefa4] = useState()
    const [timeTarefa5, setTimeTarefa5] = useState()

 
      //CRONOMETRO
      
      var hh = 0;
      var mm = 0;
      var ss = 0;
      
      var tempo = 1000;//Quantos milésimos valem 1 segundo?
      var cron;
      
      //Inicia o temporizador
      function start() {
          cron = setInterval(() => { timer(); }, tempo);
      }
      
      //Para o temporizador mas não limpa as variáveis
      function pause() {
          clearInterval(cron);
      }
      
      //Para o temporizador e limpa as variáveis
      function stop() {
          clearInterval(cron);
          hh = 0;
          mm = 0;
          ss = 0;
      
          document.getElementById('counter').innerText = '00:00:00';
      }
      
      //Faz a contagem do tempo e exibição
      function timer() {
          ss++; //Incrementa +1 na variável ss
      
          if (ss == 59) { //Verifica se deu 59 segundos
              ss = 0; //Volta os segundos para 0
              mm++; //Adiciona +1 na variável mm
      
              if (mm == 59) { //Verifica se deu 59 minutos
                  mm = 0;//Volta os minutos para 0
                  hh++;//Adiciona +1 na variável hora
              }
          }
      
          //Cria uma variável com o valor tratado HH:MM:SS
          var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
          
          //Insere o valor tratado no elemento counter
          document.getElementById('counter').innerText = format;
      
          //Retorna o valor tratado
          return format;
      }
     //DATA ATUAL
    const dataAtual = new Date().toLocaleDateString()

      //HORA ATUAL
    const horaInicio = new Date().toLocaleTimeString()
    
    
      //BOTAO INICIO
      const handleIniciar =(e)=>{

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
        

        //teste
        // const cronometro = document.querySelector("#cronometro0")
        // cronometro.innerHTML = "oii"

        const btnVerification = (e.target.id)        
        
          switch (btnVerification){
                    
                    case (btnIniciar0): 
                                     
                      let valor = getValor[0]
                      let valSelect = valor.options[valor.selectedIndex].text
                      setTarefa0(valSelect)
                      console.log(tarefa0)
                      
                      let valorEmp = getValor[1]
                      let valSelectEmp = valorEmp.options[valorEmp.selectedIndex].text
                      setEmpresa0(valSelectEmp)
                      console.log(empresa0)    
                      
                      setData(dataAtual)
                      console.log(data)

                      setHoraInicial0(horaInicio)
                      console.log(horaInicial0)
                      start()
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

                       setData(dataAtual)
                       console.log(data)
                       
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

                      setData(dataAtual)
                      console.log(data)
                      
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

                      setData(dataAtual)
                      console.log(data)

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
                       
                       setData(dataAtual)
                       console.log(data)

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
                       
                       setData(dataAtual)
                       console.log(data)
                       
                    break;
                    default:
                      console.log("Case não funcionou")
        }
        
    }
   
      //BOTAO PARAR
    const handleBtnParar =(e)=>{
           //#### VERIFICAR QUANTIDADE DE TAREFAS 
        // const quantidadeTarefas = document.querySelectorAll("#tarefa_container div")
        // const qtdTask = quantidadeTarefas.length  

        // const getValor = document.querySelectorAll("#div_task select")

        // const btnParar0 = "btnParar0"
        // const btnParar1 = "btnParar1"
        // const btnParar2 = "btnParar2"
        // const btnParar3 = "btnParar3"
        // const btnParar4 = "btnParar4"
        // const btnParar5 = "btnParar5"
        

        // //teste
        // // const cronometro = document.querySelector("#cronometro0")
        // // cronometro.innerHTML = "oii"

        // const btnVerification = (e.target.id)        
        
        //   switch (btnVerification){
                    
        //             case (btnParar0): 
                                     
                     
        //               setHoraInicial0(horaInicio)
        //               console.log(horaInicial0)
                    

        //             break;
        
        //             case (btnParar1):
                     
                       
        //             break;
        
        //             case (btnParar2):
                   

                      
        //             break;
        
        //             case (btnParar3):
                    
                      
        //             break;
        
        //             case (btnParar4):
                    

                       
        //             break;
        
        //             case (btnParar5):
                    
                       
        //             break;
        //             default:
        //               console.log("Case não funcionou")
        // }
        
    
    }

       //BOTAO GRAVAR 
    const handleBtnGravar =(e)=>{
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

                        <button id={"btnIniciar" + index} className={styles.btnIniciar} onClick={handleIniciar}>Iniciar</button>
                        <button id={"btnParar" + index} className={styles.btnParar} onClick={handleBtnParar}>Parar</button>
                        <button id={"btnGravar" + index} className={styles.btnGravar} onClick={handleBtnGravar} type="submit">Gravar</button>
                        
                        <p>{dataAtual}</p>
                        {/* <h1 id={"cronometro" + index}>00:00:00</h1> */}
                        <dir>
                            <h1 id="counter">00:00:00</h1>
                        </dir>
                        
                        
                        
              </div>
              
          );
          
      })}
      
    </div>
  );
}
export default Task