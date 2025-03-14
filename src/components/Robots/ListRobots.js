import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import DetailRobot from "./DetailRobot";

export default function ListaRobots() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => response.json())
      .then((data) => setRobots(data))
      .catch((error) => console.error("Error al obtener los robots:", error));
  }, []);

  const handleRobotClick = (robot) => {
    fetch(`http://localhost:3001/robots/${robot.id}`)
      .then((response) => response.json())
      .then((data) => setSelectedRobot(data))
      .catch((error) => console.error("Error al obtener el detalle del robot:", error));
  };

  return (
    <Container className="mt-5">
      <div className="d-flex">
        <Table striped bordered hover className="me-3" style={{ flex: 1 }}>
          <thead className="bg-dark text-white">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Empresa Fabricante</th>
            </tr>
          </thead>
          <tbody>
            {robots.map((robot) => (
              <tr key={robot.id} onClick={() => handleRobotClick(robot)} style={{ cursor: "pointer" }}>
                <td>{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <DetailRobot robot={selectedRobot} />
      </div>
    </Container>
  );
}

