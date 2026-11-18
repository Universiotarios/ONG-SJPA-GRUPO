import { Link } from 'react-router-dom';
import logo from './logo.png';

function Cabecalho() {
  return (
    <header className="cabecalho">

      {/* Espaço reservado para a logo */}
      <div className="logo">
        <img src={logo} alt="Logo da ONG" />
      </div>

      {/* Menu de navegação */}
      <nav className="navegacao">

        <Link to="/">Início</Link>

        <Link to="/trabalho">Trabalho</Link>

        <Link to="/historia">História</Link>

        <Link to="/ajuda">Ajuda</Link>

        <Link to="/contato">Contato</Link>

      </nav>

    </header>
  )
}

export default Cabecalho