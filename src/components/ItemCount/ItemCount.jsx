import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial))

    const addUnidad = () => {
        setCount(count + 1)
    }

    const resUnidad = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <div className='counter'>
                <Button disabled={count <= 1} onClick={resUnidad} variant="danger" > - </Button>
                <span >  {count}  </span>
                <Button disabled={count >= stock} onClick={addUnidad} variant="success" > + </Button>
            </div>
            <div className='btnCounter'>
                <Button disabled={stock <= 0} onClick={() => onAdd(count)} id="btnDetail">Add to cart</Button>
            </div>
        </div>
    )
}

export default ItemCount