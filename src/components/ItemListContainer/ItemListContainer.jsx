import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/Itemlist";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Spinner from "react-bootstrap/Spinner";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if (id) {
      const queryFilter = query(queryCollection, where("category", "==", id));
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [id]);

  useEffect(() => {
    async function LoadingState() {
      try {
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.log("error");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
    LoadingState();
  }, []);

  if (loading) {
    return (
      <div className="spinnerDiv">
        <Spinner animation="border" variant="primary" id="spinner" />
      </div>
    );
  } else {
    return (
      <div className="ItemListContainer">
        <ItemList data={data} />
      </div>
    );
  }
};

export default ItemListContainer;
