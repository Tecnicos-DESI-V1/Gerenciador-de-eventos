import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <nav>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
