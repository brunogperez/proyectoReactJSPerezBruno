import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/Itemlist'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [data, setData] = useState([])
  /*   const [loading, setLoading] = useState(true); */

  const getProducts = async () => {
    const response = await fetch('https://api.npoint.io/0d2ea9d7fce653016963')
    const data = await response.json()
    setData(data)
    setProducts(data)
    
  }

  useEffect(() => {
    setTimeout(() => {
      /*setLoading(true); */
      getProducts()
    }, 2000);

  }, []);

  useEffect(() => {
    const filterProd = data.filter(prod => prod.categoria === id)
    if (filterProd.length > 0) return setProducts(filterProd)
    setProducts(data)
  }, [id])

  return (
    <ItemList data={products} />
  )
}


export default ItemListContainer;
