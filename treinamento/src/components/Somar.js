import styles from "./Somar.css"


const somarValor =()=>{
    let somatoria = 0
    
}


const Somar = ({Soma}) => {

  return (
    <div>
        <h1>Testando Hooks!</h1>
        <label>
            <input className="inp1" type="text" />
        </label>
        <label>
            <input className="inp2" type="text" />
        </label>
        <button  onClick={somarValor} type="submit"></button>
        <p>
            valor: {Soma}
        </p>
    </div>
  )
}

export default Somar