import logo from './logo.svg';
import './App.css';
import Contador from './components/Task'
import Prod from './components/Produtos'

const garagem= [
  {id:1, modelo:"Gol", valor: 32000,},
  {id:2, modelo:"Palio", valor: 17000,},
  {id:3, modelo:"Corsa", valor:7000,}
]

function App(garagem) {
  return (
    <div className="App">
      {/* <Contador/> */}
      <Prod />
    </div>
  );
}

export default App;
