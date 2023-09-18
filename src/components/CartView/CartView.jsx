import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import Order from "../Order/Order";
import EmptyCart from "../../assets/img/empty_cart-512.webp";
import './CartView.css'

export const CartView = () => {

  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-center">Tu carrito está vacío!</h1>
        <img src={EmptyCart} alt="imagen de carrito vacio" className="imgCart my-2" />
      </div>
    );
  } else {
    return (
      <>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        <h3 className="text-center m-5"> Total: ${totalPrice()}</h3>

        <Order placement="end"></Order>
      </>
    );
  }
};

export default CartView;
