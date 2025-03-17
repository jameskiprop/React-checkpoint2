import Player from "./Player";
import players from "../data/players";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
