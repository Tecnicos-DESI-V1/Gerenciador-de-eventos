import Evento from "../componentes/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Envntos</h1>
      <p>Aqui voce fica por dentro dos eventos</p>
      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento
        nome="Passeio didatico"
        data="25/10/2025"
        local="Floresta do Chapecó"
      />
      <Evento nome="EFAPI" data="17/10/2025" local="EFAPI" />
    </main>
  );
}
export default Home;
