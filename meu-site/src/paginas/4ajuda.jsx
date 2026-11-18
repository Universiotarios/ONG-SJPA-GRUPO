
import qrcode from '../assets/qrcode.png';

function Ajuda() {
  return (
    <main className="conteudo ajuda">
      <h1>Como Ajudar</h1>

      <h2>
        Caso seja de seu interesse ajudar a manter a ONG ativa para que possa
        continuar ajudando, abaixo estão os seguintes itens aceitos para doação:
      </h2>

      <p>- Ração para os pets.</p>
      <p>- Produtos de Limpeza.</p>
      <p>- Materiais de Construção.</p>
      <p>- Cobertores e Cobertas.</p>

      <h2>
        Para doações financeiras, segue abaixo o QR Code do PIX,
        para qualquer quantia.
      </h2>

      <img
        src={qrcode}
        alt="QR Code para doações via PIX"
        className="qrcode-pix"
      />

      <h3>Pix Copia e Cola</h3>

      <p className="pix-copia-cola">
        00020126360014BR.GOV.BCB.PIX0114+55329912525835204000053039865802BR5920MARIA ELISA DE SOUZA6012MINAS GERAIS62070503***6304D7B2
      </p>

      <h2>
        Caso queira ajudar adotando algum animal, saiba onde nos
        encontrar na aba Contato.
      </h2>
    </main>
  );
}

export default Ajuda;
