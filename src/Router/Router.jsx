import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "../components/CartContext/CartContext";
import CartView from "../components/CartView/CartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
