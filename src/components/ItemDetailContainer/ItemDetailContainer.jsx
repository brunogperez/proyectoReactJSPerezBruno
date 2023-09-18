import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc).then((res) => setDetail({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail info={detail} />
    </div>
  );
};

export default ItemDetailContainer;
