import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useCartContext } from "../CartContext/CartContext";
import OrderItem from "../OrderItem/OrderItem";

export const Order = () => {
  const { cart, totalPrice } = useCartContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    name: "",
    mail: "",
    mailConf: "",
    tel: 0,
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (data.mail === data.mailConf) {
      const handleBuy = async () => {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "orders"), {
          buyer: data,
          items: cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
          })),
          total: totalPrice(),
          state: "generated",
        });
        Swal.fire({
          icon: "success",
          title: "Felicidades!",
          text: `Tu orden de compra es ${docRef.id}`,
        });
      };
      handleBuy();
    } else {
      setData({
        name: "",
        mail: "",
        mailConf: "",
        tel: 0,
      });
      Swal.fire({
        icon: "error",
        title: "¡Cuidado!",
        text: `Tus e-mails no coinciden, por favor ingresalos nuevamente.`,
      });
      e.target.reset();
    }
  }

  return (
    <>
      <div className="text-center m-5">
        <Button variant="success" onClick={handleShow}>
          Finalizar
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Checkout</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.map((product) => (
            <OrderItem key={product.id} product={product} />
          ))}
          <Form onSubmit={handleSubmit}>
            <Form.Label className="text-center my-3">
              <hr />
              Total del alquiler: ${totalPrice()}
              <hr />
              Para completar el alquiler, te pediremos un par de datos!
            </Form.Label>
            <hr />
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Floating className="mb-3">
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre y Apellido"
                  onChange={handleInputChange}
                  name="name"
                />
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Floating className="mb-3">
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  name="mail"
                />
                <Form.Label>Dirección de Email</Form.Label>
              </Form.Floating>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReEnterEmail">
              <Form.Floating className="mb-3">
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  name="mailConf"
                />
                <Form.Text className="text-muted">
                  No compartiremos tu Email con nadie.
                </Form.Text>
                <Form.Label>Reingrese Email</Form.Label>
              </Form.Floating>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Floating className="mb-3">
                <Form.Control
                  required
                  type="tel"
                  placeholder="Telefono"
                  onChange={handleInputChange}
                  name="tel"
                />
                <Form.Label>Teléfono</Form.Label>
              </Form.Floating>
            </Form.Group>
            <Button variant="success" type="submit">
              ¡Finalizar Compra!
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Order;
