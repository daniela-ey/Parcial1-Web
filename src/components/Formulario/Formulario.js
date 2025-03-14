import { useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

const users = {
  "a.acosta": "password123",
  "j.gomez": "securePass456",
  "m.hernandez": "helloWorld789",
  "l.martinez": "mySecret321",
};

export default function Formulario({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users[username] && users[username] === password) {
      onLoginSuccess(); // Llamar a la función para actualizar la autenticación
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center vh-50 bg-light">
      <Card className="p-4 shadow-lg" style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title className="text-center mb-3">Inicio de sesión</Card.Title>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese su usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">Ingresar</Button>
              <Button variant="danger" type="button">Cancelar</Button>
            </div>
          </Form>
          {error && <Alert variant="danger">Error de autenticación. Revise sus credenciales</Alert>}
        </Card.Body>
      </Card>
    </Container>
  );
}


