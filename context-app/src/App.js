import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products';
import Abount from './pages/Abount';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<Abount/>}/>

        </Routes>
      
      </BrowserRouter>

   
    </div>
  );
}

export default App;
