import React from "react"
import "./Item.css"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

export const Item = ({ info }) => {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card mx-auto col-md-3 col-10 mt-5"
    >
      <Card.Img src={info.pictureUrl} className="imgProd" />
      <Card.Body className="card-body text-center mx-auto">
        <Card.Title className="card-title font-weight-bold">
          {info.title}
        </Card.Title>
        <Card.Text className="card-text">${info.price}</Card.Text>
        <Button as={Link} to={`/item/${info.id}`} className="btn detail px-auto" variant="light">
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Item;
