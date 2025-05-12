import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Stock from './Components/Stock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
