
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Empleados from './pages/Empleados';
import Update from './pages/Update';
import Add from './pages/Add';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Empleados/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
