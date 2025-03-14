import { useEffect, useState } from "react";
import './App.css';
import Formulario from './components/Formulario/Formulario';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import bgImage from "./components/Formulario/imagen.png";
import ListaRobots from "./components/Robots/ListRobots";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Adopta un Robot con Robot Lovers";
  }, []);

  return (
    <div className="App">
      {/* Título siempre visible */}
      <h1 className="text-center mt-4">Adopta un Robot con Robot Lovers</h1>

      {/* Imagen siempre visible */}
      <div className="w-100 text-center mb-4">
        <Card.Img variant="top" src={bgImage} alt="Background" className="banner-image" />
      </div>

      {/* Mostrar formulario solo si NO está autenticado */}
      {!isAuthenticated && <Formulario onLoginSuccess={() => setIsAuthenticated(true)} />}

      {/* Mostrar lista de robots solo si ESTÁ autenticado */}
      {isAuthenticated && <ListaRobots />}
    </div>
  );
}

export default App;

