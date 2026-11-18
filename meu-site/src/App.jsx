
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes
import Cabecalho from './components/Cabecalho'

// Páginas
import Inicio from './paginas/1inicio'
import Trabalho from './paginas/2trabalho'
import Historia from './paginas/3historia'
import Ajuda from './paginas/4ajuda'
import Contato from './paginas/5contato'

// Estilos
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="pagina">

        {/* Cabeçalho compartilhado */}
        <Cabecalho />

        {/* Navegação entre páginas */}
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/trabalho" element={<Trabalho />} />

          <Route path="/historia" element={<Historia />} />

          <Route path="/ajuda" element={<Ajuda />} />

          <Route path="/contato" element={<Contato />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
