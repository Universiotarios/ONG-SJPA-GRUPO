import demo from '../assets/demo.png'

function Inicio() {
  return (
    <main className="conteudo">
      <img
        src={demo}
        alt="Banner da ONG SJPA"
        className="banner-inicio"
      />

      <h1>Conheça a ONG SJPA</h1>

      <p>
        A Sociedade Juizforense de Proteção à Animais (SJPA) é uma organização
        não governamental localizada em Juiz de Fora, MG, com mais de 40 anos
        de atuação dedicada ao resgate e ao abrigo de cães e gatos abandonados
        ou vítimas de maus-tratos.
      </p>
    </main>
  )
}

export default Inicio