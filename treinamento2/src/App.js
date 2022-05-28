import logo from './logo.svg';
import './App.css';
import Contador from './components/Task'
import Prod from './components/Produtos'


function App() {


  const garagem= [
    {id:1, modelo:"Gol", valor: 32000,},
    {id:2, modelo:"Palio", valor: 17000,},
    {id:3, modelo:"Corsa", valor:7000,}
  ]

 const task =[
   [, ]
 ]




  return (
    <div className="App">
      {/* <Contador/> */}
    <Prod carros={garagem} />
    </div>
  );
}

export default App;
