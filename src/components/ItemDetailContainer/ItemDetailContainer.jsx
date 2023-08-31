import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const ItemDetailContainer = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://api.npoint.io/0d2ea9d7fce653016963')
            const data = await response.json()

            const findProd = data.find(prod => prod.id == id)
            setDetail(findProd)
        }
        getProducts()
    }, [id])


    return (<ItemDetail info={detail} />)
}

export default ItemDetailContainer