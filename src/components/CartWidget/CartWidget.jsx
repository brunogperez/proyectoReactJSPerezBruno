import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../CartContext/CartContext";
import "./CartWidget.css";


export const CartWidget = () => {
  const { totalProducts } = useCartContext()
  return (
    <Row className="d-flex align-items-center">
      <Col xs={6}>
        <Button variant="light" as={Link} to={`/cart`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Button>
      </Col>
      <Col>
        <span className="cartNumber">{totalProducts() || ''}</span>
      </Col>
    </Row>
  );
};

export default CartWidget;
