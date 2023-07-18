import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Formulario from './components/Formulario/Formulario'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Formulario}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App
