import './App.css';
import Painel from './components/Painel'
import {useState} from 'react'
// import Tarefa from "./components/Task"
// import Somar from "./components/Somar"
// import Menu from "./components/Menu"
// import MenuSuperior  from "./components/MenuSuperior"
// import Rodape from "./components/Rodape"

function App() {
const [btnMenu, setBtnMenu] = useState(false);
const btnOnClick =()=>setBtnMenu(!btnMenu)
console.log(btnMenu)
  

  return (
    <div className="App">
      {/* <Painel/> */}
      <h1>Testando</h1>
      <button onClick={btnOnClick}>Clique aqui</button>

    </div>
  );
}

export default App;
