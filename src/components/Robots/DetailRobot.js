import { Card } from "react-bootstrap";
import "./detailRobot.css";

export default function DetailRobot({ robot }) {
  if (!robot) {
    return <p className="text-center mt-4">Selecciona un robot para ver los detalles.</p>;
  }

  return (
    <Card className="robot-detail-card">
      <Card.Body>
        <Card.Title className="robot-title">{robot.nombre}</Card.Title>
        <div className="robot-image-container">
          <Card.Img 
            variant="top" 
            src={robot.imagen} 
            alt={robot.nombre} 
            className="robot-image" 
          />
        </div>
        <Card.Text className="robot-details">
          <p className="robot-detail-text">➝ <strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
          <p className="robot-detail-text">➝ <strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
          <p className="robot-detail-text">➝ <strong>Humor:</strong> {robot.humor}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
