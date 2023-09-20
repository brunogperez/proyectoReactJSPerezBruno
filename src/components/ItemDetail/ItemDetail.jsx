import ItemCount from "../ItemCount/ItemCount.jsx";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./ItemDetail.css";
import { useCartContext } from "../CartContext/CartContext.jsx";
import { Link } from "react-router-dom";



export const ItemDetail = ({ info }) => {

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    addProduct(info, quantity)
  }

  return (
    <Container style={{ width: "100%" }}>
      <Card id='cardDetail'>
        <Card.Body>
          <Card.Text className="cardText">
            <Link to="/" className="textHome" > HOME</Link> / {info.category} / {info.title}
          </Card.Text>
          <Row>
            <Col className="text-center col-lg-6 ">
              <Image fluid src={info.pictureUrl} id="imgDetail" />
            </Col>
            <Col className="info col-lg-6">
              <Row className="title cardText">
                <Col className="text-center">
                  <p className="cardText">{info.description}</p>
                </Col>
              </Row>
              <Row className="price">
                <Card.Text className="textCard text-center">${info.price}</Card.Text>
              </Row>
              <Col className="m-4">
                <ItemCount initial={1} stock={6} onAdd={onAdd} />
              </Col>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;