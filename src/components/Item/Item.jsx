import React from "react"
import './Item.css'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import imagenes from '../../assets/imagenes.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Item = ({ info }) => {
  return (
    <Card style={{ width: '18rem' }} className="mx-2 my-2">
            <Card.Img src={imagenes[info.id - 1]} />
            <Card.Body>
              <Card.Title>{info.nombre}</Card.Title>
              <Card.Text>{info.precio}</Card.Text>
              <Link to={`/item/${info.id}`}> Ver </Link >
            </Card.Body>
          </Card>
  );
}
export default Item;
