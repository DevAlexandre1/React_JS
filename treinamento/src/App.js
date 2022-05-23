import Somar from './components/Somar'
import './App.css';
import {useState} from 'react'




function App() {


  const [somaValor, setSomarValor] = useState();

  
  return (
    <div className="App">
        

        <Somar/>

    </div>
  );
}

export default App;
