import styles from './Somar.css'
import {useState} from 'react'


const Somar = () => {
 //hooks para controlar o estado atual da variável 
const [valor1, setValor1] = useState();
const [valor2, setvalor2] = useState();
const [resultado, setResultado] = useState();

//Arrow Functions para mudar o valor e estado da varíavel
const valor1set = (e)=>{
    setValor1(e.target.value)
}
const valor2set = (e)=>{
    setvalor2(e.target.value)
}
const res =()=>{    
    setResultado((parseFloat(valor1) + parseFloat(valor2)))
}



    return (
        <div>
            <h1>Testando Hooks!</h1>
            <label>
                <input type="number" name="valor1" id="v1" onChange={valor1set}/>
            </label>
            <label>
                <input type="number" name="valor2" id="v2" onChange={valor2set}/>
            </label>
            <button className={styles.btn} onClick={res} type="submit">Calcular:</button>

            <h1>{resultado}</h1>

        </div>
    )
  }

export default Somar

