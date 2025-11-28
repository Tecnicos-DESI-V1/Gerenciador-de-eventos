import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento";
import "./style.css";
import "./header/header.css";
import "./footer/footer.css";
import "./paginas/CadastroEvento.css";
import "./paginas/Modal.css";
function App() {
  const [eventos, setEventos] = useState([]);

  function handleCadastrarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
    console.log("Evento cadastrado:", novoEvento);
  }

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/CadastroEvento"
            element={<CadastroEvento onCadastrar={handleCadastrarEvento} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
